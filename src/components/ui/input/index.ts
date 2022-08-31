import template from './template.hbs'
import './style.css'
import Component from '../../../lib/dom/Component'
import { ComponentOptions } from '../../../lib/dom/types'

export class Input extends Component {
  constructor(options: Omit<ComponentOptions, 'template'>) {
    super({
      template,
      ...options
    })
  }
}
