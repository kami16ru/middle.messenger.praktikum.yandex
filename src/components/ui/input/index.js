import template from './template.hbs'
import './style.css'
import Component from '../../../lib/dom/Component'

class Input extends Component {
  constructor(options) {
    super(options)
  }
}

export default new Input({
  template
})
