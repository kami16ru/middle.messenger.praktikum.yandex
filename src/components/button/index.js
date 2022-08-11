import Handlebars from '../../plugins/handlebars'
import template from './template.hbs'
import './style.css'

Handlebars.registerPartial('button', template)

export default (props = {}) => {
  return template(props)
}