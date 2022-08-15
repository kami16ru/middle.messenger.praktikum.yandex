import template from './template.hbs'
import './style.css'

import nav from '../../config/nav'
import icons from '../../config/icons'
import { useNavDrawer } from '../../components/nav/nav-drawer'
import Component from '../../lib/dom/Component'

class ChatLayout extends Component {
  constructor(options) {
    super(options)
  }

  async mounted() {
    super.mounted()

    await useNavDrawer()
  }
}

export default new ChatLayout({
  selector: '.chat-layout',
  template: template,
  props: {
    navList: nav.drawer,
    toggleIcon: icons.toggleNav
  }
})
