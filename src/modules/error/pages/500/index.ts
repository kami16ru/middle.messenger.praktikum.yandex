import template from './template.hbs'
import './style.css'
import Component from '../../../../lib/dom/Component'
import Button from '../../../../components/ui/button/index'
import { ComponentOptions } from '../../../../lib/dom/types'

export class ServerErrorPage extends Component {
  constructor(options: ComponentOptions = {}) {
    super({
      template,
      props: {
        goBackBtnId: 'return-back',
        GoBackBtn: Button.template({
          ...Button.props,
          class: 'white mx-auto',
          value: 'На главную',
          href: '/',
          outline: true
        })
      },
      ...options
    })
  }
}
