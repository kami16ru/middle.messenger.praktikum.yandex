import template from './template.hbs'
import './style.css'
import Block from '../../../../lib/dom/Block'
import { NavDrawerMenu } from './menu'
import { NavDrawerActivatorIcon } from './activator-icon'
export interface NavDrawerHeaderProps {
  withMenu?: boolean
  selectedNavList: string
}

export class NavDrawerHeader extends Block {
  navDrawer: HTMLElement
  collapsed: boolean

  constructor(props: NavDrawerHeaderProps) {
    super({
      collapsed: false,
      ...props
    })

    this.collapsed = false
  }

  init() {
    this.children.navDrawerMenu = new NavDrawerMenu({ selectedNavList: this.props.selectedNavList })
    this.children.activatorIcon = new NavDrawerActivatorIcon({
      name: 'menu-activator',
      class: 'mdi mdi-menu h1 nav-drawer__toggle-icon pointer info',
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
