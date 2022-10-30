import Block from '../../../../../lib/dom/Block'
import template from './template.hbs'

export interface DrawerHeaderIconProps {
  name: string
  class: string
  to?: string
  active?: boolean
  collapsed?: boolean
  events?: {
    click: () => void
  }
}

export class NavDrawerActivatorIcon extends Block<DrawerHeaderIconProps> {
  constructor(props: DrawerHeaderIconProps) {
    super(props)
  }

  render() {
    return this.compile(template, this.props)
  }
}
