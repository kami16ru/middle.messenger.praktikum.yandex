import ErrorHandler from '../error/ErrorHandler'
import { ComponentOptions, IComponent, TemplateEngineProps } from './types'

export default {
  compile: (template: ComponentOptions['template'], props: TemplateEngineProps): string => {
    return template(props)
  },
  render: (rootQuery: string, component: IComponent) => {
    try {
      const root = document.querySelector(rootQuery)

      if (!root) ErrorHandler.handle('Document not found!')

      else {
        component.dispatchRender()
        root.appendChild(component._element)
        component.dispatchComponentDidMount()
      }
    } catch (e) {
      ErrorHandler.handle(e)
    }
  },
  renderDom: (component: IComponent) => {
    try {
      const root = document.getElementById(component._id)

      if (!root) ErrorHandler.handle('Document not found!')

      else {
        component.dispatchRender()
        root.appendChild(component.getContent())
        component.dispatchComponentDidMount()
      }
    } catch (e) {
      ErrorHandler.handle(e)
    }
  }
}
