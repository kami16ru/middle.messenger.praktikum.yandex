import template from './template.hbs'
import './style.css'
import Component from '../../../lib/dom/Component'

class Button extends Component {
  constructor(options) {
    super(options)
  }
}

export default new Button({
  template
})
