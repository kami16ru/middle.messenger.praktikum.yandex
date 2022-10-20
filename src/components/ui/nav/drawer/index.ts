import template from './template.hbs'
import './style.css'
import Component from '../../../../lib/dom/Component'
import { ComponentOptionsWithoutTemplate } from '../../../../lib/dom/types'
import { NavDrawerHeaderConfig } from '../../../../config/nav'
import templateEngine from '../../../../lib/dom/templateEngine'
import ChatEntity from '../../../../lib/chat/ChatEntity'
import { NavDrawerHeader } from './header/index'

export class NavDrawer extends Component {
  headerMenuConfig: NavDrawerHeaderConfig[]

  constructor(options: ComponentOptionsWithoutTemplate = {}) {
    const drawerHeader = new NavDrawerHeader({
      props: {
        withHeaderMenu: options?.props?.withHeaderMenu
      }
    })
    const headerMenuConfig = drawerHeader.components.navDrawerMenu.props?.menuConfig as NavDrawerHeaderConfig[]
    const activeMenu = options?.props?.activeMenuConfig || 'nav'
    const activeMenuConfig = headerMenuConfig.find((menuConfig: NavDrawerHeaderConfig) => menuConfig.name === activeMenu) as NavDrawerHeaderConfig
    const activeComponent = activeMenuConfig.component

    super({
      template,
      ...options,
      props: {
        ...options.props,
        navDrawerHeaderId: drawerHeader.id,
        activeMenuConfig,
        activeMenuComponentId: activeComponent.id
      },
      components: { drawerHeader, activeComponent },
      attrs: {
        class: `nav-drawer ${options?.props?.collapsed ? 'nav-drawer_collapsed bg-dark' : 'bg-dark'}`
      }
    })

    this.headerMenuConfig = headerMenuConfig
  }

  mounted() {
    super.mounted()

    this.components.drawerHeader.eventBus.on('nav-drawer-toggle-menu', this.onNavDrawToggle.bind(this))
    this.components.drawerHeader.components.navDrawerMenu.eventBus.on('nav-drawer-header-icon-click', this.onNavDrawHeaderIconClick.bind(this))
    this.components.activeComponent.eventBus.on('chat:selected', this.onChatSelected.bind(this))
  }

  onNavDrawToggle(args: Record<string, boolean>) {
    this.components.activeComponent.eventBus.emit('nav-drawer-toggle-menu', args)
  }

  onNavDrawHeaderIconClick(args: Record<string, string>) {
    this.setActiveComponent(args.elemId)

    this.dispatchComponentDidUpdate({
      ...this.props,
      activeMenuComponentId: args.elemId
    })
    templateEngine.renderDom(this.components.activeComponent)
  }

  setActiveComponent(id: Component['id']) {
    const activeMenuConfig = this.headerMenuConfig.find((menuConfig: NavDrawerHeaderConfig) => menuConfig.component.id === id) as NavDrawerHeaderConfig

    this.components.activeComponent = activeMenuConfig.component
  }

  onChatSelected(chat: ChatEntity) {
    this.eventBus.emit('chat:selected', chat)
  }
}
