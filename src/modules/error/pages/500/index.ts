import template from './template.hbs'
import './style.css'
import Component from '../../../../lib/dom/Component'
import Button from '../../../../components/ui/button/index'
import { ComponentOptions } from '../../../../lib/dom/types';

class ServerErrorPage extends Component {
  constructor(options: ComponentOptions) {
    super(options)
  }
}

export default new ServerErrorPage({
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
  }
})
