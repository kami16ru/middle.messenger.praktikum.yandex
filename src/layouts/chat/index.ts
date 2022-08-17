// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import template from './template.hbs'
import './style.css'
import nav from '../../config/nav'
import icons from '../../config/icons'
import Component from '../../lib/dom/Component'
import NavDrawer from '../../components/ui/nav/nav-drawer/index'
import { ComponentOptions } from '../../lib/dom/types'

class ChatLayout extends Component {
  constructor(options: ComponentOptions) {
    super(options)
  }
}

export default new ChatLayout({
  selector: '.chat-layout',
  template: template,
  props: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    NavDrawer: NavDrawer.template({
      ...NavDrawer.props,
      navList: nav.drawer,
      toggleIcon: icons.toggleNav
    })
  },
  components: { NavDrawer }
})
