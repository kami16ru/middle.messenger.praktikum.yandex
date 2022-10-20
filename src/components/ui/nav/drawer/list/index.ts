import template from './template.hbs'
import './style.css'
import Component from '../../../../../lib/dom/Component'
import { ComponentOptions } from '../../../../../lib/dom/types'
import { navDrawerList } from '../../../../../config/nav'

export class NavDrawerList extends Component {
  _collapsed: boolean
  navDrawer: HTMLElement
  navDrawerToggle: HTMLElement

  constructor(options: Omit<ComponentOptions, 'template'>) {
    super({
      template,
      ...options,
      props: {
        ...options.props,
        navList: navDrawerList
      }
    })
  }

  mounted() {
    super.mounted()

    this.showTitles()

    this.eventBus.on('nav-drawer-toggle-menu', this.onNavDrawerToggle.bind(this))
  }

  onNavDrawerToggle(args: Record<string, unknown>) {
    const { collapsed } = args

    if (!collapsed) {
      this.showTitles()
    } else {
      this.hideTitles()
    }
  }

  showTitles() {
    setTimeout(() => {
      for (const elem of document.getElementsByClassName('nav-menu-title')) {
        elem.removeAttribute('hidden')
      }
    }, 500)
  }

  hideTitles() {
    for (const elem of document.getElementsByClassName('nav-menu-title')) {
      elem.setAttribute('hidden','true')
    }
  }
}
