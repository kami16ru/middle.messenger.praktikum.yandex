import Block from '../../../../../utils/Block'
import template from './template.hbs'

export class NavDrawerMenu extends Block {
  render() {
    return this.compile(template, this.props)
  }
}
