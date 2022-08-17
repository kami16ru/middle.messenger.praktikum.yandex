import ErrorHandler from '../error/ErrorHandler'
import { IComponent, TemplateEngineProps } from './types'

export default {
  compile: (template: string, props: TemplateEngineProps): string => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return template(props)
  },
  render: (root: HTMLElement, component: IComponent) => {
    try {
      component.dispatchRender()
      root.appendChild(component._element)
      component.dispatchComponentDidMount()
    } catch (e) {
      ErrorHandler.handle(e)
    }
  }
}
