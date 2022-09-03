import template from './template.hbs'
import './style.css'
import Component from '../../../../lib/dom/Component'
import { ComponentOptionsWithoutTemplate } from '../../../../lib/dom/types'

export class ChatPage extends Component {
  constructor(options: ComponentOptionsWithoutTemplate = {}) {
    super({
      template,
      ...options
    })
  }
}
