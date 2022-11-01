import Block from '../../../../../lib/dom/Block'
import template from './template.hbs'
import { NavDrawerMenuItem, NavDrawerMenuItemProps } from './menu-item/index'
import { navDrawerHeader } from '../../../../../config/nav'
import store, { withStore } from '../../../../../lib/dom/Store'

export interface NavDrawerMenuProps {
  selectedNavList: string
}

export class NavDrawerMenuComponent extends Block<NavDrawerMenuProps> {
  protected init() {
    this.children.menuItems = this.createItems(navDrawerHeader)
  }

  createItems(menuConfig: NavDrawerMenuItemProps[]) {
    return menuConfig.map((props) => {
      return new NavDrawerMenuItem({
        ...props,
        active: store.getState().nav.selectedNavList === props.name
      })
    })
  }

  protected componentDidUpdate(oldProps: NavDrawerMenuProps, newProps: NavDrawerMenuProps): boolean {
    if (super.componentDidUpdate(oldProps, newProps)) {
      this.children.menuItems = this.createItems(navDrawerHeader)

      return true
    } else return false
  }

  render() {
    return this.compile(template, this.props)
  }
}

export const withSelectedIcon = withStore((state) => ({ selectedNavList: state.nav?.selectedNavList }))

export const NavDrawerMenu = withSelectedIcon(NavDrawerMenuComponent)
