import template from './template.hbs'
import './style.css'
// import { NavDrawerHeaderConfig } from '../../../config/nav'
import { NavDrawerHeader } from './header/index'
import Block from '../../../lib/dom/Block'
import { NavDrawerList } from './list/index'
import { navDrawerList } from '../../../config/nav'

export interface NavDrawerProps {
  withHeaderMenu?: boolean
  collapsed: boolean
  activeComponent?: string
}

export class NavDrawer extends Block<NavDrawerProps> {
  activeComponent: string

  constructor(props: NavDrawerProps) {
    super(props)

    this.activeComponent = props.activeComponent || 'navList'
  }

  init() {
    this.children.activeComponent = this.getActiveComponent(this.activeComponent) as Block

    this.children.header = new NavDrawerHeader({
      withMenu: this.props.withHeaderMenu
    })
  }

  getActiveComponent(val: string) {
    switch (val) {
    case 'navList': {
      return new NavDrawerList({ navList: navDrawerList })
    }
    case 'chatList': {
      return new NavDrawerList({ navList: navDrawerList })
    }
    default: {
      return new NavDrawerList({ navList: navDrawerList })
    }
    }
  }

  // mounted() {
  //   super.mounted()
  //
  //   this.components.drawerHeader.eventBus.on('nav-drawer-toggle-menu', this.onNavDrawToggle.bind(this))
  //   this.components.drawerHeader.components.navDrawerMenu.eventBus.on('nav-drawer-header-icon-click', this.onNavDrawHeaderIconClick.bind(this))
  //   this.components.activeComponent.eventBus.on('chat:selected', this.onChatSelected.bind(this))
  // }
  //
  // onNavDrawToggle(args: Record<string, boolean>) {
  //   this.components.activeComponent.eventBus.emit('nav-drawer-toggle-menu', args)
  // }
  //
  // onNavDrawHeaderIconClick(args: Record<string, string>) {
  //   this.setActiveComponent(args.elemId)
  //
  //   this.dispatchComponentDidUpdate({
  //     ...this.props,
  //     activeMenuComponentId: args.elemId
  //   })
  //   templateEngine.renderDom(this.components.activeComponent)
  // }
  //
  // onChatSelected(chat: ChatResponse) {
  //   this.eventBus.emit('chat:selected', chat)
  // }

  render() {
    return this.compile(template, this.props)
  }
}
