import template from './template.hbs'
import './style.css'
import { Link } from '../../../../components/ui/link'
import Block from '../../../../lib/dom/Block'
import Router from '../../../../lib/dom/Router'

export class NotFoundPage extends Block {
  init() {
    this.children.goBack = new Link({
      label: 'На главную',
      to: '/',
      events: {
        click: () => Router.go('/')
      }
    })
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}
