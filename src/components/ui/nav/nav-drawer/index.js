import template from './template.hbs'
import './style.css'
import Component from '../../../../lib/dom/Component'

class NavDrawer extends Component {
  constructor(options) {
    super(options)
  }

  mounted() {
    super.mounted()

    let navCollapsed = false

    const navDrawer = document.querySelector('.nav-drawer')
    const navDrawerToggle = document.querySelector('.nav-drawer__toggle-icon')

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
        for (const elem of document.getElementsByClassName('nav-menu-title')) {
          elem.removeAttribute('hidden')
        }
      }, 500)
      navCollapsed = false
    }

    function closeNav() {
      navDrawer.classList.add('nav-drawer_collapsed')
      navDrawerToggle.classList.add('nav-drawer__toggle-icon_collapsed')

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
