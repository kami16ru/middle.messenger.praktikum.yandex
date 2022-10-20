import template from './template.hbs'
import './style.css'
import Component from '../../../../../lib/dom/Component'
import { ComponentOptions } from '../../../../../lib/dom/types'
import { navDrawerHeader, NavDrawerHeaderConfig } from '../../../../../config/nav'
import { v4 as makeUUID } from 'uuid'

const headerMenuConfig = navDrawerHeader.map((menuConfig) => {
  const component = new menuConfig.component({})

  return {
    name: menuConfig.name,
    icon: menuConfig.icon,
    iconId: makeUUID(),
    active: menuConfig.active,
    component,
    class: menuConfig.class
  }
})

export class NavDrawerMenu extends Component {
  _collapsed: boolean
  navDrawer: HTMLElement
  navDrawerToggle: HTMLElement
  menuConfig: NavDrawerHeaderConfig[]

  constructor(options: Omit<ComponentOptions, 'template'>) {
    super({
      template,
      ...options,
      props: {
        ...options.props,
        collapsed: false,
        menuConfig: headerMenuConfig
      },
      attrs: {
        class: 'nav-drawer__menu'
      }
    })

    this.menuConfig = headerMenuConfig
    this.collapsed = !!this._props?.collapsed
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
  }

  mounted() {
    super.mounted()

    this.menuConfig.forEach((config) => {
      const elem = document.getElementById(config.iconId) as HTMLElement

      elem.onclick = () => {
        this.setActiveIcon(config.iconId)
        this.eventBus.emit('nav-drawer-header-icon-click', { elemId: config.component.id })
      }
    })
  }

  setActiveIcon(componentId: Component['id']) {
    this.menuConfig.forEach((config) => config.active = componentId === config.iconId)
    this.dispatchComponentDidUpdate({ ...this.props, menuConfig: this.menuConfig })
  }

  openNav() {
    setTimeout(() => {
      for (const elem of document.getElementsByClassName('nav-drawer__header-icon')) {
        elem.removeAttribute('hidden')
      }
    }, 500)
  }
  closeNav() {
    for (const elem of document.getElementsByClassName('nav-drawer__header-icon')) {
      elem.setAttribute('hidden','true')
    }
  }
}
