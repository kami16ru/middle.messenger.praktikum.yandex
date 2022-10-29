import Block from '../../../../../../lib/dom/Block'
import template from './template.hbs'
import store from '../../../../../../lib/dom/Store'

export interface NavDrawerMenuItemProps {
  name: string
  class: string
  to?: string
  active?: boolean
  events?: {
    click: () => void
  }
}

export class NavDrawerMenuItem extends Block<NavDrawerMenuItemProps> {
  constructor(props: NavDrawerMenuItemProps) {
    super({
      ...props,
      events: {
        click: () => store.set('nav.selectedNavList', props.name)
      }
    })
  }

  render() {
    return this.compile(template, this.props)
  }
}
