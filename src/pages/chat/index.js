import template from './template.hbs'
import './style.css'
import '../../components/button'
import nav from '../../config/nav'
import icons from '../../config/icons'
import Component from '../../lib/dom/Component'

class ChatPage extends Component {
  constructor(options) {
    super(options)
  }

  mounted() {
    console.log('render chat page')
  }
}

export default new ChatPage({
  template,
  props: {
    navList: nav.drawer,
    toggleIcon: icons.toggleNav
  }
})
