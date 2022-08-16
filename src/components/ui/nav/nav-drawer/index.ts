// @ts-ignore
import template from './template.hbs'
import './style.css'
import Component from '../../../../lib/dom/Component'
import { ComponentOptions } from '../../../../lib/dom/types'

class NavDrawer extends Component {
  constructor(options: ComponentOptions) {
    super(options)
  }

  mounted() {
    super.mounted()

    let navCollapsed = false

    const navDrawer = document.querySelector('.nav-drawer')
    const navDrawerToggle: HTMLElement = document.querySelector('.nav-drawer__toggle-icon')

    navDrawerToggle.onclick = function () {
      toggleNavDrawer()
    }

    function toggleNavDrawer() {
      navCollapsed ? openNav() : closeNav()
    }

    function openNav() {
      // navDrawer.style.width = '250px';
      navDrawer.classList.remove('nav-drawer_collapsed')
      navDrawerToggle.classList.remove('nav-drawer__toggle-icon_collapsed')

      setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        for (const elem of document.getElementsByClassName('nav-menu-title')) {
          elem.removeAttribute('hidden')
        }
      }, 500)
      navCollapsed = false
    }

    function closeNav() {
      navDrawer.classList.add('nav-drawer_collapsed')
      navDrawerToggle.classList.add('nav-drawer__toggle-icon_collapsed')

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      for (const elem of document.getElementsByClassName('nav-menu-title')) {
        elem.setAttribute('hidden','true')
      }

      navCollapsed = true
    }
  }
}

export default new NavDrawer({
  template
})
