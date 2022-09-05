import template from './template.hbs'
import './style.css'
import Component from '../../../../lib/dom/Component'
import { ComponentOptions } from '../../../../lib/dom/types'
import icons from '../../../../config/icons'
import  { v4 as makeUUID } from 'uuid'

const chatActiveId = makeUUID()
const menuActiveId = makeUUID()

export class NavDrawer extends Component {
  _collapsed: boolean
  activatorMiddle: boolean
  navDrawer: HTMLElement
  navDrawerToggle: HTMLElement
  activateChatIcon: HTMLElement
  activateMenuIcon: HTMLElement
  chatActive: boolean

  constructor(options: Omit<ComponentOptions, 'template'>) {
    super({
      template,
      ...options,
      props: {
        activatorMidIcon: icons.toggleNav,
        activatorTopIcon: icons.menu,
        ...options.props,
        chatActiveId: chatActiveId,
        menuActiveId: menuActiveId,
        collapsed: true
      }
    })

    this._collapsed = !!this._props?.collapsed
    this.activatorMiddle = !!this.props?.activatorMiddle
    this.chatActive = false
  }

  get collapsed() {
    return this._collapsed
  }

  set collapsed(val: boolean) {
    this._collapsed = val

    if (!val) {
      setTimeout(() => {
        for (const elem of document.getElementsByClassName('nav-menu-title')) {
          elem.removeAttribute('hidden')
        }
        for (const elem of document.getElementsByClassName('nav-menu-header-icon')) {
          elem.removeAttribute('hidden')
        }
      }, 500)
    }
  }

  mounted() {
    super.mounted()

    this.navDrawer = document.querySelector('.nav-drawer') as HTMLElement
    this.navDrawerToggle = document.querySelector(this.activatorMiddle ? '.nav-drawer__toggle-mid' : '.nav-drawer__toggle-top') as HTMLElement
    this.activateChatIcon = document.getElementById(chatActiveId) as HTMLElement
    this.activateMenuIcon = document.getElementById(menuActiveId) as HTMLElement

    this.navDrawerToggle.onclick = () => this.collapsed ? this.openNav() : this.closeNav()
    this.eventBus.on('nav-drawer-toggle-menu', (args) => {
      const { chatActive, collapsed } = args

      this.dispatchComponentDidUpdate({
        ...this._props,
        chatActive,
        collapsed
      })
      this.chatActive = chatActive
      this.collapsed = collapsed
    })
    this.activateChatIcon.onclick = () => this.eventBus.emit('nav-drawer-toggle-menu', { chatActive: true, collapsed: false })
    this.activateMenuIcon.onclick = () => this.eventBus.emit('nav-drawer-toggle-menu', { chatActive: false, collapsed: false })
  }

  openNav() {
    this.navDrawer.classList.remove('nav-drawer_collapsed')
    if (this.activatorMiddle) this.navDrawerToggle.classList.remove('nav-drawer__toggle-mid_collapsed')
    else this.navDrawerToggle.classList.add('nav-drawer__toggle-top_expanded')

    setTimeout(() => {

      // for (const elem of document.getElementsByClassName('nav-menu-title')) {
      //   elem.removeAttribute('hidden')
      // }

      // for (const elem of document.getElementsByClassName('nav-menu-header-icon')) {
      //   elem.removeAttribute('hidden')
      // }
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

    for (const elem of document.getElementsByClassName('nav-menu-header-icon')) {
      elem.setAttribute('hidden','true')
    }

    this.collapsed = true
  }
}
