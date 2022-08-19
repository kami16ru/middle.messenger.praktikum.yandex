import ErrorHandler from '../error/ErrorHandler'
import { ComponentOptions, IComponent, TemplateEngineProps } from './types'

export default {
  compile: (template: ComponentOptions['template'], props: TemplateEngineProps): string => {
    return template(props)
  },
  render: (root: Element, component: IComponent) => {
    try {
      component.dispatchRender()
      root.appendChild(component._element)
      component.dispatchComponentDidMount()
    } catch (e) {
      ErrorHandler.handle(e)
    }
  }
}
