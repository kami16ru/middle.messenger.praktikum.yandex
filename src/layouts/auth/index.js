import template from './template.hbs'
import './style.css'

export default {
  selector: '.auth-layout',
  template,
  props: {},
  mounted() {
    console.log('render auth layout')
  },
}