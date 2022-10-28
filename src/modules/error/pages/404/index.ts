import template from './template.hbs'
import './style.css'
import { Link } from '../../../../components/ui/link/index'
import Block from '../../../../lib/dom/Block'

export class NotFoundPage extends Block {
  init() {
    this.children.goBack = new Link({
      label: 'На главную',
      to: '/'
    })
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}
