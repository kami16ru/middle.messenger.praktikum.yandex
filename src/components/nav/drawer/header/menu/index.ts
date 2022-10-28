import Block from '../../../../../lib/dom/Block'
import template from './template.hbs'

export class NavDrawerMenu extends Block {
  render() {
    return this.compile(template, this.props)
  }
}
