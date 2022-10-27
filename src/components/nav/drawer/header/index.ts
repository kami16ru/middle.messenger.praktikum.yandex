import template from './template.hbs'
import './style.css'
import Block from '../../../../utils/Block'
import { NavDrawerHeaderConfig, navDrawerHeader } from '../../../../config/nav'
import { NavDrawerMenu } from './menu/index'
import { NavDrawerHeaderIcon } from './icon/index'

export interface NavDrawerHeaderProps {
  // collapsed?: boolean
  menuConfig?: NavDrawerHeaderConfig[]
  withMenu?: boolean
}

export class NavDrawerHeader extends Block {
  navDrawer: HTMLElement
  menuConfig: NavDrawerHeaderConfig[]
  navDrawerMenu: NavDrawerMenu
  collapsed: boolean

  constructor(props: NavDrawerHeaderProps) {
    super({
      collapsed: false,
      menuConfig: navDrawerHeader,
      ...props
    })

    this.collapsed = false
  }

  init() {
    this.children.navDrawerMenu = new NavDrawerMenu({ menuConfig: this.props.menuConfig })
    this.children.activatorIcon = new NavDrawerHeaderIcon({
      events: {
        click: () => {
          this.collapsed ? this.openNav() : this.closeNav()

          this.collapsed = !this.collapsed
        }
      }
    })
  }

  openNav() {
    const navDrawer = document.querySelector('.nav-drawer') as HTMLElement

    navDrawer.classList.remove('nav-drawer_collapsed')

    setTimeout(() => {
      for (const elem of document.getElementsByClassName('nav-drawer__header-icon')) {
        elem.removeAttribute('hidden')
      }
      for (const elem of document.getElementsByClassName('nav-menu-title')) {
        elem.removeAttribute('hidden')
      }
    }, 500)
  }
  closeNav() {
    const navDrawer = document.querySelector('.nav-drawer') as HTMLElement

    navDrawer.classList.add('nav-drawer_collapsed')

    setTimeout(() => {
      for (const elem of document.getElementsByClassName('nav-drawer__header-icon')) {
        elem.setAttribute('hidden', 'true')
      }
      for (const elem of document.getElementsByClassName('nav-menu-title')) {
        elem.setAttribute('hidden', 'true')
      }
    })
  }

  render() {
    return this.compile(template, this.props)
  }
}
