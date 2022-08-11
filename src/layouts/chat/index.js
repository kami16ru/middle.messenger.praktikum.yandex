import ChatLayout from './template.hbs'
import './style.css'

import nav from '../../config/nav'
import icons from '../../config/icons'
import { useNavDrawer } from '../../components/nav/nav-drawer'

export default {
  selector: '.chat-layout',
  template: ChatLayout,
  props: {
    navList: nav.drawer,
    toggleIcon: icons.toggleNav,
  },
  async mounted() {
    console.log('render chat layout')

    await useNavDrawer()
  },
}