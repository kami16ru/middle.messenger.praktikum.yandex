import Block from './Block'

export interface BlockConstructable<P = any> {
  new(props: P): Block<P>;
}

export type RouteConfig = {
  name: string
  path: string
  redirect?: string
  layout?: string
  props?: Record<string, unknown>
  component: BlockConstructable
}
