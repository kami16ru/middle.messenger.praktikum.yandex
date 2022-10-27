import Block from '../../../../../utils/Block'
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
