import template from './template.hbs'
import './style.css'
import Component from '../../../../lib/dom/Component'
import { Button } from '../../../../components/ui/button/index'
import { ComponentOptions } from '../../../../lib/dom/types'

const goBackBtn = new Button({
  props: {
    class: 'white mx-auto',
    value: 'На главную',
    href: '/',
    outline: true
  }
})

export class ServerErrorPage extends Component {
  constructor(options: Omit<ComponentOptions, 'template'> = {}) {
    super({
      template,
      props: {
        goBackBtnId: 'return-back',
        GoBackBtn: goBackBtn.compile()
      },
      ...options
    })
  }
}
