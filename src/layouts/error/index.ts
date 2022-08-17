// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import template from './template.hbs'
import './style.css'
import Component from '../../lib/dom/Component'
import { ComponentOptions } from '../../lib/dom/types'

class ErrorLayout extends Component {
  constructor(options: ComponentOptions) {
    super(options)
  }
}

export default new ErrorLayout({
  selector: '.error-layout',
  template
})
