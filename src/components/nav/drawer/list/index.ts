import template from './template.hbs'
import './style.css'
import Block from '../../../../utils/Block'
import { NavDrawerListItem } from './item/index'
import Router from '../../../../utils/Router'

export interface NavDrawerListConfig {
  title: string
  to: string
  icon: string
  events?: {
    click: (event: Event) => void
  }
}

export interface NavDrawerListProps {
  navList: NavDrawerListConfig[]
  collapsed?: boolean
}

export class NavDrawerList extends Block<NavDrawerListProps> {
  navDrawer: HTMLElement
  navDrawerToggle: HTMLElement

  constructor(props: NavDrawerListProps) {
    super({
      ...props
    })
  }

  init() {
    this.children.items = this.createItems(this.props.navList)
  }

  createItems(navList: NavDrawerListConfig[]) {
    return navList.map((props) => {
      return new NavDrawerListItem({
        ...props,
        events: {
          click: () => Router.go(props.to)
        }
      })
    })
  }

  render() {
    return this.compile(template, this.props)
  }
}
