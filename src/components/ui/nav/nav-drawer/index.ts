import template from './template.hbs'
import './style.css'
import Component from '../../../../lib/dom/Component'
import { ComponentOptions } from '../../../../lib/dom/types'

export class NavDrawer extends Component {
  collapsed: boolean
  navDrawer: HTMLElement
  navDrawerToggle: HTMLElement

  constructor(options: Omit<ComponentOptions, 'template'>) {
    super({
      template,
      ...options
    })

    this.collapsed = true
  }

  mounted() {
    super.mounted()

    this.navDrawer = document.querySelector('.nav-drawer') as HTMLElement
    this.navDrawerToggle = document.querySelector('.nav-drawer__toggle-icon') as HTMLElement

    this.navDrawerToggle.onclick = () => this.collapsed ? this.openNav() : this.closeNav()
  }

  openNav() {
    this.navDrawer.classList.remove('nav-drawer_collapsed')
    this.navDrawerToggle.classList.remove('nav-drawer__toggle-icon_collapsed')

    setTimeout(() => {

      for (const elem of document.getElementsByClassName('nav-menu-title')) {
        elem.removeAttribute('hidden')
      }
    }, 500)
    this.collapsed = false
  }
  closeNav() {
    this.navDrawer.classList.add('nav-drawer_collapsed')
    this.navDrawerToggle.classList.add('nav-drawer__toggle-icon_collapsed')

    for (const elem of document.getElementsByClassName('nav-menu-title')) {
      elem.setAttribute('hidden','true')
    }

    this.collapsed = true
  }
}
