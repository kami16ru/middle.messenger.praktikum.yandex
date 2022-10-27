import Block from '../../../../../utils/Block'
import template from './template.hbs'
import { NavDrawerListConfig } from '../index'
import './style.css'

export interface NavDrawerListItem {
  events?: {
    click: () => void
  }
}

export class NavDrawerListItem extends Block<NavDrawerListConfig> {
  render() {
    return this.compile(template, this.props)
  }
}
