import template from './template.hbs'
import './style.css'
import Component from '../../../lib/dom/Component'
import { ComponentOptions } from '../../../lib/dom/types'

export class Button extends Component {
  constructor(options: Omit<ComponentOptions, 'template'> = {}) {
    super({
      template,
      ...options
    })
  }
}
