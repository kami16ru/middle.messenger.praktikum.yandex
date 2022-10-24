import {
  IComponent,
  RouteConfig,
  TemplateEngineProps,
  ComponentConstructor
} from './types'
import templateEngine from './templateEngine'

import { ChatLayout } from '../../layouts/chat/index'
import { DefaultLayout } from '../../layouts/default/index'
import { AuthLayout } from '../../layouts/auth/index'
import { ErrorLayout } from '../../layouts/error/index'
import { notFoundRoute } from '../../router/index'

const layouts: Record<string, IComponent> = {
  chatLayout: new ChatLayout(),
  defaultLayout: new DefaultLayout(),
  authLayout: new AuthLayout(),
  errorLayout: new ErrorLayout()
}

function getLayout(name = ''): IComponent {
  return layouts[`${name}Layout`] ? layouts[`${name}Layout`] : layouts.defaultLayout
}

function isEqual(lhs: string, rhs: string) {
  return lhs === rhs
}

export class Route {
  _componentClass: ComponentConstructor
  _component: IComponent | null
  _config: RouteConfig
  _pathName: string
  _props: TemplateEngineProps | undefined
  _rootQuery: string

  constructor(rootQuery: string, routeConfig: RouteConfig) {
    const { path, component, props } = routeConfig

    this._rootQuery = rootQuery
    this._config = routeConfig
    this._pathName = path
    this._componentClass = component
    this._component = null
    this._props = props
  }

  navigate(pathname: string): void {
    if (this.match(pathname)) {
      this._pathName = pathname
      this.render()
    }
  }

  leave() {
    if (this._component) {
      this._component.hide()

      if (this._config.layout) {
        const elem = document.querySelector(getLayout(this._config.layout).selector || '')

        if (elem) elem.remove()
      }
    }
  }

  match(pathname: string) {
    return isEqual(pathname, this._pathName)
  }

  render() {
    if (!this._component) {
      this._component = new this._componentClass()
      if (this._config.layout) {
        const layout = getLayout(this._config.layout)

        templateEngine.render(this._rootQuery, layout)
        templateEngine.render(layout.selector ?? this._config.layout, this._component)
      } else templateEngine.render(this._rootQuery, this._component)

      return
    }

    this._component.show()
  }
}

export class Router {
  private static __instance: Router
  routes: Route[]
  _rootQuery: string
  private history = window.history;
  private currentRoute: Route | undefined = undefined;

  constructor(private readonly rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance
    }

    this.routes = []

    Router.__instance = this
  }

  use(routeConfig: RouteConfig): Router {
    const route = new Route(this.rootQuery, routeConfig)

    if (route) this.routes.push(route)

    return this
  }

  start() {
    window.onpopstate = (event) => {
      if (event.currentTarget && event.currentTarget instanceof Window) this._onRoute(event.currentTarget.location.pathname)
    }

    this._onRoute(window.location.pathname)
  }

  _onRoute(pathname: string): void {
    const route = this.getRoute(pathname)

    if (this.currentRoute) {
      this.currentRoute.leave()
    }

    if (route?._config.redirect) {
      const routeConfig = this.routes.find((r) => r._config.name === route._config.redirect)

      if (routeConfig) this.go(routeConfig._config.path)

      return
    }

    if (route) {
      this.currentRoute = route
      route.render()
    } else this.go(notFoundRoute.path)
  }

  go(pathname: string) {
    this.history.pushState({}, '', pathname)
    this._onRoute(pathname)
  }

  back() {
    this.history.back()
  }

  forward() {
    this.history.forward()
  }

  getRoute(pathname: string): Route | undefined {
    return this.routes.find((route) => route.match(pathname))
  }
}

export default new Router('#app')
