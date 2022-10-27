import template from './template.hbs'
import './style.css'
import { navDrawerList } from '../../../../config/nav'
import Block from '../../../../utils/Block'

export interface NavDrawerListConfig {
  navList?: {
    title: string
    to: string
    icon: string,
    events: {
      click: (event: Event) => void
    }
  }[]
}

export class NavDrawerList extends Block<NavDrawerListConfig> {
  _collapsed: boolean
  navDrawer: HTMLElement
  navDrawerToggle: HTMLElement

  constructor(props: NavDrawerListConfig) {
    super({
      navList: navDrawerList.map((item) => ({ ...item, events: { click: (event: Event) => this.onMenuItemClick(event) } })),
      ...props
    })
  }

  init() {
    // this.eventBus.on('nav-drawer-toggle-menu', this.onNavDrawerToggle.bind(this))
  }

  onMenuItemClick(event: Event) {
    console.log(event)
  }

  // mounted() {
  //   super.mounted()
  //
  //   this.showTitles()
  //
  //   this.eventBus.on('nav-drawer-toggle-menu', this.onNavDrawerToggle.bind(this))
  // }

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

  render() {
    return this.compile(template, this.props)
  }
}
