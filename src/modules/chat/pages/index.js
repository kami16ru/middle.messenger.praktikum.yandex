import template from './template.hbs'
import './style.css'
import '../../../components/button'
import Component from '../../../lib/dom/Component'

class ChatPage extends Component {
  constructor(options) {
    super(options)
  }

  mounted() {
    console.log('render chat page')
  }
}

export default new ChatPage({
  template
})
