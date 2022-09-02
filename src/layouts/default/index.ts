import template from './template.hbs'
import './style.css'
import nav from '../../config/nav'
import Component from '../../lib/dom/Component'
import { NavDrawer } from '../../components/ui/nav/nav-drawer/index'
import { ComponentOptions } from '../../lib/dom/types'

const navDrawer = new NavDrawer({
  props: {
    navList: nav.drawer
  }
})

export class DefaultLayout extends Component {
  constructor(options: Omit<ComponentOptions, 'template'>) {
    super({
      selector: '.default-layout',
      template,
      props: {
        NavDrawer: navDrawer.compile()
      },
      components: { navDrawer },
      attrs: {
        class: 'default-layout container full'
      },
      ...options
    })
  }
}
