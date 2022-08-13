import { errorMessages } from '../error/config'
import EventBus from './EventBus'

export default class Component {
  constructor(options) {
    if (this.constructor === Component) throw new Error(errorMessages.classErrors.ABSTRACT_CLASS)

    const { template, selector, props, mounted, components } = options

    if (!template) throw new Error(errorMessages.classErrors.INVALID_CONSTRUCTOR_ARGS)

    this._options = options
    this.template = template
    this.props = props
    this._mounted = mounted
    this._selector = selector
    this.evenBus = new EventBus()
    this.components = components

    this.evenBus.on('mounted', async () => {
      await this.mounted()

      if (this.components) await Promise.all(Object.values(this.components).map((component) => component.evenBus.emit('mounted')))
    })
  }

  get options() {
    return this._options
  }

  get selector() {
    return this._selector
  }

  mounted() {
    return this._mounted
  }

  compile() {
    return this.template(this.props)
  }
}
