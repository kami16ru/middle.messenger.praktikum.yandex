import { errorMessages } from '../error/config'
import EventBus from './EventBus'

export default class Component {
  constructor(options) {
    if (this.constructor === Component) throw new Error(errorMessages.classErrors.ABSTRACT_CLASS)

    const { template, selector, props, mounted } = options

    if (!template) throw new Error(errorMessages.classErrors.INVALID_CONSTRUCTOR_ARGS)

    this.template = template
    this.props = props
    this._mounted = mounted
    this._selector = selector
    this.evenBus = new EventBus()

    this.evenBus.on('mounted', () => this.mounted())
  }

  get selector() {
    return this._selector
  }

  mounted() {
    return this._mounted
  }
}
