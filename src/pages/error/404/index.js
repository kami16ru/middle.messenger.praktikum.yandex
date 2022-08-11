import template from './template.hbs'
import './style.css'
import '../../../components/button'

export default {
  template,
  props: {
    goBackBtnId: 'return-back',
  },
  mounted: () => {
    console.log('render 404 page')
  },
}