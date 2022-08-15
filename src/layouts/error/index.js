import template from './template.hbs'
import './style.css'
import Component from '../../lib/dom/Component'

class ErrorLayout extends Component {
  constructor(options) {
    super(options)
  }
}

export default new ErrorLayout({
  selector: '.error-layout',
  template
})
