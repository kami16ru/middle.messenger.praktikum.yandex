import template from './template.hbs'
import './style.css'
import Component from '../../../lib/dom/Component'

class Button extends Component {
  constructor(options) {
    super(options)
  }

  mounted() {
    console.log('Button component mounted')
  }
}

export default new Button({
  template
})
