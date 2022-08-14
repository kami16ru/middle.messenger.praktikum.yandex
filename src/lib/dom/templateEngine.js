import { EVENTS } from '../../config/events'
import ErrorHandler from '../error/ErrorHandler'

export default {
  compile: (template, props) => {
    return template(props)
  },
  render: (root, component) => {
    try {
      root.appendChild(component._element)
      component.eventBus.emit(EVENTS.FLOW_CDM)
    } catch (e) {
      ErrorHandler.handle(e)
    }
  }
}
