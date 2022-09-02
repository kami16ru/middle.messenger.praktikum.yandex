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

export class ChatLayout extends Component {
  constructor(options: Omit<ComponentOptions, 'template'>) {
    super({
      selector: '.chat-layout',
      template: template,
      props: {
        NavDrawer: navDrawer.compile()
      },
      components: { navDrawer },
      ...options
    })
  }
}
