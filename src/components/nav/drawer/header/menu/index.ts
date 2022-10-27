import Block from '../../../../../utils/Block'
import template from './template.hbs'
import './style.css'
import { NavDrawerHeaderConfig } from '../../../../../config/nav'

export class NavDrawerMenu extends Block {
  constructor(props: NavDrawerHeaderConfig[]) {
    super(props)

    this.props.collapsed ? this.openNav() : this.closeNav()
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

  render() {
    return this.compile(template, this.props)
  }
}
