import template from './template.hbs'
import './style.css'
import Component from '../../lib/dom/Component'
import { ComponentOptions } from '../../lib/dom/types'

class AuthLayout extends Component {
  constructor(options: ComponentOptions) {
    super(options)
  }
}

export default new AuthLayout({
  selector: '.auth-layout',
  template
})
