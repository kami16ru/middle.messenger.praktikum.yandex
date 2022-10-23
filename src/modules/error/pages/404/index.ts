import template from './template.hbs'
import './style.css'
import Component from '../../../../lib/dom/Component'
import { Button } from '../../../../components/ui/button/index'
import { ComponentOptionsWithoutTemplate } from '../../../../lib/dom/types'

const goBackBtn = new Button({
  props: {
    class: 'white mx-auto',
    value: 'На главную',
    href: '/',
    outline: true
  }
})

export class NotFoundPage extends Component {
  constructor(options: ComponentOptionsWithoutTemplate = {}) {
    super({
      template,
      props: {
        goBackBtnId: goBackBtn.id
      },
      components: { goBackBtn },
      ...options
    })
  }
}
