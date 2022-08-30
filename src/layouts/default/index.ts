import template from './template.hbs'
import './style.css'
import nav from '../../config/nav'
import icons from '../../config/icons'
import Component from '../../lib/dom/Component'
import NavDrawer from '../../components/ui/nav/nav-drawer/index'
import { ComponentOptions } from '../../lib/dom/types'

export class DefaultLayout extends Component {
  constructor(options: ComponentOptions = {}) {
    super({
      selector: '.default-layout',
      template,
      props: {
        navList: nav.drawer,
        toggleIcon: icons.toggleNav,
        NavDrawer: NavDrawer.template({
          ...NavDrawer.props,
          navList: nav.drawer,
          toggleIcon: icons.toggleNav
        })
      },
      components: { NavDrawer },
      attrs: {
        class: 'default-layout container full'
      },
      ...options
    })
  }
}
