import template from './template.hbs'
import './style.css'
import Component from '../../lib/dom/Component'
import { ComponentOptions } from '../../lib/dom/types'

export class AuthLayout extends Component {
  constructor(options: Omit<ComponentOptions, 'template'> = {}) {
    super({
      selector: '.auth-layout',
      template,
      ...options
    })
  }
}
