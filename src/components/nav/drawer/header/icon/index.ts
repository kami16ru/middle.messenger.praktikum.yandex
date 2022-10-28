import Block from '../../../../../lib/dom/Block'
import template from './template.hbs'

export interface DrawerHeaderIconProps {
  events: {
    click: () => void
  }
}

export class NavDrawerHeaderIcon extends Block<DrawerHeaderIconProps> {
  constructor(props: DrawerHeaderIconProps) {
    super(props)
  }

  render() {
    return this.compile(template, this.props)
  }
}
