import template from './template.hbs'
import './style.css'
import Component from '../../lib/dom/Component'
import { ComponentOptions } from '../../lib/dom/types'

export class ChatLayout extends Component {
  constructor(options: Omit<ComponentOptions, 'template'> = {}) {
    super({
      selector: '.chat-layout',
      template: template,
      ...options,
      attrs: {
        class: 'container full chat-layout'
      }
    })
  }
}
