import template from './template.hbs'
import './style.css'
import Component from '../../../lib/dom/Component'

class ChatPage extends Component {
  constructor(options) {
    super(options)
  }
}

export default new ChatPage({
  template
})
