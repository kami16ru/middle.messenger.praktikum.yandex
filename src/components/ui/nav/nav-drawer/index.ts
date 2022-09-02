import template from './template.hbs'
import './style.css'
import Component from '../../../../lib/dom/Component'
import { ComponentOptions } from '../../../../lib/dom/types'
import icons from '../../../../config/icons'

export class NavDrawer extends Component {
  collapsed: boolean
  activatorMiddle: boolean
  navDrawer: HTMLElement
  navDrawerToggle: HTMLElement

  constructor(options: Omit<ComponentOptions, 'template'>) {
    super({
      template,
      ...options,
      props: {
        activatorMidIcon: icons.toggleNav,
        activatorTopIcon: icons.menu,
        ...options.props
      }
    })

    this.collapsed = true
    this.activatorMiddle = !!this.props?.activatorMiddle
  }

  mounted() {
    super.mounted()

    this.navDrawer = document.querySelector('.nav-drawer') as HTMLElement
    this.navDrawerToggle = document.querySelector(this.activatorMiddle ? '.nav-drawer__toggle-mid' : '.nav-drawer__toggle-top') as HTMLElement

    this.navDrawerToggle.onclick = () => this.collapsed ? this.openNav() : this.closeNav()
  }

  openNav() {
    this.navDrawer.classList.remove('nav-drawer_collapsed')
    if (this.activatorMiddle) this.navDrawerToggle.classList.remove('nav-drawer__toggle-mid_collapsed')
    else this.navDrawerToggle.classList.add('nav-drawer__toggle-top_expanded')

    setTimeout(() => {

      for (const elem of document.getElementsByClassName('nav-menu-title')) {
        elem.removeAttribute('hidden')
      }
    }, 500)
    this.collapsed = false
  }
  closeNav() {
    this.navDrawer.classList.add('nav-drawer_collapsed')
    if (this.activatorMiddle) this.navDrawerToggle.classList.add('nav-drawer__toggle-mid_collapsed')
    else this.navDrawerToggle.classList.remove('nav-drawer__toggle-top_expanded')

    for (const elem of document.getElementsByClassName('nav-menu-title')) {
      elem.setAttribute('hidden','true')
    }

    this.collapsed = true
  }
}
