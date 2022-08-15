import template from './template.hbs'
import './style.css'
import Component from '../../lib/dom/Component'

class AuthLayout extends Component {
  constructor(options) {
    super(options)
  }
}

export default new AuthLayout({
  selector: '.auth-layout',
  template,
  props: {}
})
