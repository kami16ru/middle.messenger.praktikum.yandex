import template from './template.hbs'
import './style.css'
import '../../../components/button'
import Component from '../../../lib/dom/Component'

class NotFoundPage extends Component {
  constructor(options) {
    super(options)
  }

  mounted() {
    console.log('render 404 page')
  }
}

export default new NotFoundPage({
  template,
  props: {
    goBackBtnId: 'return-back'
  }
})
