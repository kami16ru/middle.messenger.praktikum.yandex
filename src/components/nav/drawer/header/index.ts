import template from './template.hbs'
import './style.css'
import Block from '../../../../utils/Block'
import { NavDrawerHeaderConfig, navDrawerHeader } from '../../../../config/nav'
import { NavDrawerMenu } from './menu/index'
import { NavDrawerHeaderIcon } from './icon/index'
import store, { withStore } from '../../../../utils/Store'

export interface NavDrawerHeaderProps {
  collapsed?: boolean
  menuConfig?: NavDrawerHeaderConfig[]
  withMenu?: boolean
}

export class NavDrawerHeaderComponent extends Block {
  navDrawer: HTMLElement
  menuConfig: NavDrawerHeaderConfig[]
  navDrawerMenu: NavDrawerMenu

  constructor(props: NavDrawerHeaderProps) {
    super({
      collapsed: false,
      menuConfig: navDrawerHeader,
      ...props
    })

    // this.menuConfig = this.props?.menuConfig as NavDrawerHeaderConfig[]
    // this._collapsed = !!this._props?.collapsed
    // this.navDrawerMenu = navDrawerMenu
  }

  init() {
    this.children.navDrawerMenu = new NavDrawerMenu({ ...this.props.menuConfig })
    this.children.activatorIcon = new NavDrawerHeaderIcon({
      events: {
        click: () => this.collapsed = !this.collapsed
      }
    })
  }

  set collapsed(val: boolean) {
    store.set('nav.collapsed', val)

    val ? this.closeNav() : this.openNav()
  }
  //
  // mounted() {
  //   super.mounted()
  //
  //   if (!this.props?.withHeaderMenu) this.navDrawerMenu.hide()
  //   this.navDrawer = document.querySelector('.nav-drawer') as HTMLElement
  //   this.navDrawerToggle = document.querySelector('.nav-drawer__toggle-icon') as HTMLElement
  //   this.navDrawerToggle.onclick = () => this.collapsed = !this.collapsed
  // }
  //
  // setActiveIcon(componentId: Component['id']) {
  //   this.menuConfig.forEach((config) => config.active = componentId === config.iconId)
  //   this.dispatchComponentDidUpdate({ ...this.props, menuConfig: this.menuConfig })
  // }
  //
  openNav() {
    const navDrawer = document.querySelector('.nav-drawer') as HTMLElement

    navDrawer.classList.remove('nav-drawer_collapsed')
  }
  closeNav() {
    const navDrawer = document.querySelector('.nav-drawer') as HTMLElement

    navDrawer.classList.add('nav-drawer_collapsed')
  }

  render() {
    return this.compile(template, this.props)
  }
}

const withNav = withStore((state) => ({ ...state.nav }))

export const NavDrawerHeader = withNav(NavDrawerHeaderComponent)
