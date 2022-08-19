import EventBus from './EventBus'
import Component from './Component'

export interface IComponent {
  components: ComponentOptions['components']
  _element: Element
  _options: ComponentOptions
  _id: string
  template: ComponentOptions['template']
  _props?: ComponentOptions['props']
  _selector: ComponentOptions['selector']
  eventBus: EventBus
  _meta: {
    tag: string
    props: ComponentOptions['props']
  }
  readonly props: ComponentOptions['props']
  readonly options: ComponentOptions
  readonly selector: ComponentOptions['selector']
  getContent(): Element
  mounted(): void
  compile(): string
  dispatchRender(): void
  dispatchComponentDidMount(): void
  dispatchComponentDidUpdate(): void
  componentMustReRender(oldProps: ComponentOptions['props'], newProps: ComponentOptions['props']): boolean
}

export type TemplateEngineProps = Record<string, unknown>

export type ComponentOptions = {
  template: (props: TemplateEngineProps) => string
  selector?: string
  props?: TemplateEngineProps
  components?: Record<string, Component>
  tagName?: string
  attrs?: Record<string, string>
}

export interface IEventBus {
  listeners: Record<string, Array<() => void>>
  on(event: string, callback: () => void): void
  off(event: string, callback: () => void): void
  emit(event: string, ...args: unknown[]): void
}
