import template from './template.hbs'
import './style.css'
import Component from '../../lib/dom/Component'
import { ComponentOptions } from '../../lib/dom/types'

export class ErrorLayout extends Component {
  constructor(options: ComponentOptions = {}) {
    super({
      selector: '.error-layout',
      template,
      ...options
    })
  }
}
