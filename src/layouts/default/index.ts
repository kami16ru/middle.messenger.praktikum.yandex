import template from './template.hbs'
import './style.css'
import Component from '../../lib/dom/Component'
import { NavDrawer } from '../../components/ui/nav/drawer/index'
import { ComponentOptions } from '../../lib/dom/types'

const navDrawer = new NavDrawer({
  props: {
    withHeaderMenu: false
  }
})

export class DefaultLayout extends Component {
  constructor(options: Omit<ComponentOptions, 'template'> = {}) {
    super({
      selector: '.default-layout',
      template,
      ...options,
      props: {
        ...options.props,
        navDrawerId: navDrawer.id
      },
      components: { navDrawer },
      attrs: {
        class: 'default-layout container full'
      }
    })
  }
}
