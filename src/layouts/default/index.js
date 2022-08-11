import template from './template.hbs'
import './style.css'

import nav from '../../config/nav'
import icons from '../../config/icons'
import '../../components/nav/nav-drawer'
import { useNavDrawer } from '../../components/nav/nav-drawer'
import Component from '../../lib/dom/Component'

class DefaultLayout extends Component {
  constructor(options) {
    super(options)
  }

  async mounted() {
    console.log('render default layout')

    await useNavDrawer()
  }
}

export default new DefaultLayout({
  selector: '.default-layout',
  template,
  props: {
    navList: nav.drawer,
    toggleIcon: icons.toggleNav
  }
})
