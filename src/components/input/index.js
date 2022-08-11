import Handlebars from '../../plugins/handlebars'
import template from './template.hbs'

import './style.css'

Handlebars.registerPartial('inputText', template)

export default (props = {}) => {
  return template(props)
}