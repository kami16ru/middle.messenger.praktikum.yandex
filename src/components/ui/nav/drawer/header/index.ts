import template from './template.hbs'
import './style.css'
import Component from '../../../../../lib/dom/Component'
import { ComponentOptions } from '../../../../../lib/dom/types'
import icons from '../../../../../config/icons'
import { NavDrawerHeaderConfig } from '../../../../../config/nav'
import { NavDrawerMenu } from '../menu/index'

export class NavDrawerHeader extends Component {
  _collapsed: boolean
  navDrawer: HTMLElement
  navDrawerToggle: HTMLElement
  menuConfig: NavDrawerHeaderConfig[]
  navDrawerMenu: NavDrawerMenu

  constructor(options: Omit<ComponentOptions, 'template'>) {
    const navDrawerMenu = new NavDrawerMenu({})

    super({
      template,
      ...options,
      props: {
        ...options.props,
        activatorIcon: icons.menu,
        collapsed: false,
        headerMenuId: navDrawerMenu.id
      },
      components: { navDrawerMenu },
      attrs: {
        class: 'nav-drawer__header'
      }
    })

    this.menuConfig = this.props?.menuConfig as NavDrawerHeaderConfig[]
    this._collapsed = !!this._props?.collapsed
    this.navDrawerMenu = navDrawerMenu
  }

  get collapsed() {
    return this._collapsed
  }

  set collapsed(val: boolean) {
    this._collapsed = val

    if (!val) {
      this.openNav()
    } else {
      this.closeNav()
    }

    this.eventBus.emit('nav-drawer-toggle-menu', { collapsed: this.collapsed })
  }

  mounted() {
    super.mounted()

    if (!this.props?.withHeaderMenu) this.navDrawerMenu.hide()
    this.navDrawer = document.querySelector('.nav-drawer') as HTMLElement
    this.navDrawerToggle = document.querySelector('.nav-drawer__toggle-icon') as HTMLElement
    this.navDrawerToggle.onclick = () => this.collapsed = !this.collapsed
  }

  setActiveIcon(componentId: Component['id']) {
    this.menuConfig.forEach((config) => config.active = componentId === config.iconId)
    this.dispatchComponentDidUpdate({ ...this.props, menuConfig: this.menuConfig })
  }

  openNav() {
    this.navDrawer.classList.remove('nav-drawer_collapsed')
    this.navDrawerMenu.openNav()
  }
  closeNav() {
    this.navDrawer.classList.add('nav-drawer_collapsed')
    this.navDrawerMenu.closeNav()
  }
}
