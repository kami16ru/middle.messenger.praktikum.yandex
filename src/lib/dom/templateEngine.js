import { EVENTS } from '../../config/events'
import ErrorHandler from '../error/ErrorHandler'

export default {
  compile: (template, props) => {
    return template(props)
  },
  render: (root, component) => {
    try {
      component.dispatchRender()
      root.appendChild(component._element)
      component.dispatchComponentDidMount()
    } catch (e) {
      ErrorHandler.handle(e)
    }
  }
}
