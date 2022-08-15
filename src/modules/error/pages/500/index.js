import template from './template.hbs'
import './style.css'
import '../../../../components/button'
import Component from '../../../../lib/dom/Component'

class ServerErrorPage extends Component {
  constructor(options) {
    super(options)
  }

  mounted() {
    console.log('render 500 page')
  }
}

export default new ServerErrorPage({
  template,
  props: {
    goBackBtnId: 'return-back'
  }
})
