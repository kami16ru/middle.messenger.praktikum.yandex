import Handlebars from '../../../plugins/handlebars'
import template from './template.hbs'
import './style.css'

Handlebars.registerPartial('nav-drawer', template)

export const useNavDrawer = () => import('./navDrawer')

export default (props = {}) => {
  return template(props)
}