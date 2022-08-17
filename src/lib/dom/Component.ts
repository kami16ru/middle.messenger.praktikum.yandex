import { errorMessages } from '../error/config'
import EventBus from './EventBus'
import { EVENTS } from '../../config/events'
import templateEngine from './templateEngine'
import  { v4 as makeUUID } from 'uuid'
import { IComponent, ComponentOptions } from './types'

export default class Component implements IComponent {
  components
  _element: Element
  _options
  _id: string
  _template
  _props: ComponentOptions['props']
  _selector
  eventBus: EventBus
  _meta

  constructor(options: ComponentOptions) {
    if (this.constructor === Component) throw new Error(errorMessages.classErrors.ABSTRACT_CLASS)

    const { template, selector, props = {}, components, tagName = 'div' } = options

    if (!template) throw new Error(errorMessages.classErrors.INVALID_CONSTRUCTOR_ARGS)

    this._options = options
    this._id = makeUUID()
    this._template = template
    this._props = this._makePropsProxy(props)
    this._selector = selector
    this.eventBus = new EventBus()
    this.components = components
    this._meta = {
      tag: tagName ? tagName : 'div',
      props
    }

    this._registerEvents()
    this.eventBus.emit(EVENTS.INIT)
  }

  get props() {
    return this._props
  }

  get template() {
    return this._template
  }

  get options() {
    return this._options
  }

  get selector() {
    return this._selector
  }

  getContent() {
    return this._element
  }

  mounted() {
    console.log(`${this.constructor.name} mounted`)
  }

  compile() {
    return templateEngine.compile(this.template, this.props)
  }

  dispatchRender() {
    this.eventBus.emit(EVENTS.FLOW_RENDER)
  }

  dispatchComponentDidMount() {
    this.eventBus.emit(EVENTS.FLOW_CDM)
  }

  dispatchComponentDidUpdate() {
    this.eventBus.emit(EVENTS.FLOW_CDU)
  }

  componentMustReRender(oldProps: ComponentOptions['props'], newProps: ComponentOptions['props']) {
    return JSON.stringify(oldProps) !== JSON.stringify(newProps)
  }

  private _init() {
    this._element = Component._createElement(this._meta.tag)
    this._addAttributes()
  }

  private _registerEvents(): void {
    this.eventBus.on(EVENTS.INIT, this._init.bind(this))
    this.eventBus.on(EVENTS.FLOW_CDM, this._mounted.bind(this))
    this.eventBus.on(EVENTS.FLOW_CDU, this._updated.bind(this))
    this.eventBus.on(EVENTS.FLOW_RENDER, this._render.bind(this))
  }

  private _mounted(): void {
    this.mounted()

    if (this.components && Object.values(this.components).length) {
      Object.values(this.components).map((component) => component.eventBus.emit(EVENTS.FLOW_CDM))
    }
  }

  private _updated(newProps: ComponentOptions['props']): void {
    if (this.componentMustReRender(this._props, newProps)) this.eventBus.emit(EVENTS.FLOW_RENDER)
  }

  private _render(): void {
    this._element.innerHTML = this.compile()
    console.log(`${this.constructor.name} rendered`, this._id, this.components)
    if (this.components) {
      const components = Object.values(this.components)

      if (components.length > 0) components.forEach((instance) => instance.eventBus.emit(EVENTS.FLOW_RENDER))
    }
  }

  private static _createElement(tagName: string): Element {
    return document.createElement(tagName)
  }

  private _makePropsProxy(props: ComponentOptions['props']) {
    return new Proxy(props, {
      get(target, prop: string) {
        if (prop.indexOf('_') === 0) {
          throw new Error('Отказано в доступе')
        }

        const value = target[prop]

        return typeof value === 'function' ? value.bind(target) : value
      },
      deleteProperty() {
        throw new Error('Отказано в доступе')
      }
    })
  }

  _addAttributes() {
    const { attrs = {} } = this._options

    Object.entries(attrs).forEach(([key,value]: [string, string]) => {
      this._element.setAttribute(key, value)
    })
  }
}