import DefaultLayout from './template.hbs'
import './style.css'

import nav from '../../config/nav'
import icons from '../../config/icons'
import '../../components/nav/nav-drawer'
import { useNavDrawer } from '../../components/nav/nav-drawer'

export default {
  selector: '.default-layout',
  template: DefaultLayout,
  props: {
    navList: nav.drawer,
    toggleIcon: icons.toggleNav,
  },
  async mounted() {
    console.log('render default layout')

    await useNavDrawer()
  },
}