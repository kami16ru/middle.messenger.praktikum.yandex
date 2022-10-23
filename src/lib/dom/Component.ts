import { errorMessages } from '../error/config'
import EventBus from './EventBus'
import { EVENTS } from '../../config/events'
import templateEngine from './templateEngine'
import  { v4 as makeUUID } from 'uuid'
import { ComponentOptions, TemplateEngineProps, IComponent, ComponentConstructor } from './types'
import ErrorHandler from '../error/ErrorHandler'

export default class Component<P extends ComponentOptions = any> implements IComponent {
  components: Record<string, Component>
  _element: HTMLElement
  _options
  _id: string
  template
  _props: ComponentOptions['props']
  _selector
  eventBus: EventBus
  _meta

  constructor(options: P) {
    if (this.constructor === Component) throw new Error(errorMessages.classErrors.ABSTRACT_CLASS)

    const { template, selector, props = {}, components, tagName = 'div', store } = options

    if (!template) throw new Error(errorMessages.classErrors.INVALID_CONSTRUCTOR_ARGS)

    this._options = options
    this._id = makeUUID()
    this.template = template

    this._props = this._makePropsProxy({
      ...props,
      id: this._id,
      ...store
    })
    this._selector = selector

    this.eventBus = new EventBus()
    this.components = components || {}
    this._meta = {
      tag: tagName ? tagName : 'div',
      props
    }

    this._registerEvents()
    this.eventBus.emit(EVENTS.INIT)
  }

  get id() {
    return this._id
  }

  get props() {
    return this._props
  }

  get options() {
    return this._options
  }

  get selector() {
    return this._selector
  }

  setProps = (nextProps: P) => {
    if (!nextProps) return

    if (!this._props) this._props = {}

    Object.assign(this._props, nextProps)
  };

  show() {
    this.getContent().style.display = 'block'
  }

  hide() {
    this.getContent().style.display = 'none'
  }

  getContent() {
    return this._element
  }

  mounted() {
    console.log(`${this.constructor.name} mounted`)
  }

  updated() {
    console.log(`${this.constructor.name} updated`)
  }

  compile() {
    return templateEngine.compile(this.template, this.props as TemplateEngineProps)
  }

  dispatchRender() {
    this.eventBus.emit(EVENTS.FLOW_RENDER)
  }

  dispatchComponentDidMount() {
    this.eventBus.emit(EVENTS.FLOW_CDM)
  }

  dispatchComponentDidUpdate(newProps: ComponentOptions['props']) {
    this.eventBus.emit(EVENTS.FLOW_CDU, newProps)
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
      Object.values(this.components).forEach((component: Component) => templateEngine.renderDom(component))
    }
  }

  private _updated(newProps: ComponentOptions['props']): void {
    console.log(this._props, newProps)
    this._props = this._makePropsProxy(newProps)

    // if (this.componentMustReRender(this._props, newProps)) this.eventBus.emit(EVENTS.FLOW_RENDER)
    this.eventBus.emit(EVENTS.FLOW_RENDER)
    templateEngine.renderDom(this)

    this.updated()
  }

  private _render(): void {
    this._element.innerHTML = this.compile()
    console.log(`${this.constructor.name} rendered`, this._id, this.components)
    if (this.components) {
      const components = Object.values(this.components)

      if (components.length > 0) components.forEach((instance) => instance.dispatchRender())
    }
  }

  private static _createElement(tagName: string): HTMLElement {
    return document.createElement(tagName)
  }

  private _makePropsProxy(props: ComponentOptions['props']): TemplateEngineProps {
    if (typeof props !== 'object') {
      ErrorHandler.handle('Please provide object for proxy')

      return {}
    }

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

export const getTemplatesFromComponents = (components: Record<string, Component>) => {
  return Object.values(components).map((component) => {
    return component.compile()
  })
}

export const createComponentsFromProps = (propsArr: Record<string, unknown>[], ComponentClass: ComponentConstructor) => {
  const components: Record<string, Component> = {}

  propsArr.forEach((prop) => {
    const component = new ComponentClass({
      props: {
        ...prop
      }
    })

    return Object.assign(components, { [component._id]: component })
  })

  return components
}
