import template from './template.hbs'
import './style.css'
import Component from '../../../lib/dom/Component'
import { ComponentOptions } from '../../../lib/dom/types'

class Button extends Component {
  constructor(options: ComponentOptions) {
    super(options)
  }
}

export default new Button({
  template
})
