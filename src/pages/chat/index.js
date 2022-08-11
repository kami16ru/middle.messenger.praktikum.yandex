import ChatPage from './template.hbs'
import './style.css'
import '../../components/button'
import nav from '../../config/nav'
import icons from '../../config/icons'

export default {
  template: ChatPage,
  props: {
    navList: nav.drawer,
    toggleIcon: icons.toggleNav,
  },
  mounted: () => {
    console.log('render chat page')
  },
}