import template from './template.hbs'
import './style.css'
import nav from '../../config/nav'
import icons from '../../config/icons'
import Component from '../../lib/dom/Component'
import NavDrawer from '../../components/ui/nav/nav-drawer'

class ChatLayout extends Component {
  constructor(options) {
    super(options)
  }
}

export default new ChatLayout({
  selector: '.chat-layout',
  template: template,
  props: {
    NavDrawer: NavDrawer.template({
      ...NavDrawer.props,
      navList: nav.drawer,
      toggleIcon: icons.toggleNav
    })
  },
  components: { NavDrawer }
})
