import Block from './Block'
import { BlockConstructable, RouteConfig } from './types'
import { notFoundRoute } from '../../config/routes'
import store from './Store'
import { signInRoute, signUpRoute } from '../../modules/auth/config/routes'

function isEqual(lhs: string, rhs: string): boolean {
  return lhs === rhs
}

function render(query: string, block: Block) {
  const root = document.querySelector(query)

  if (root === null) {
    throw new Error(`root not found by selector "${query}"`)
  }

  root.innerHTML = ''

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  root.append(block.getContent()!)

  return root
}

class Route {
  private block: Block | null = null
  private readonly blockClass: BlockConstructable
  public pathname: string
  public layout: string | undefined
  public redirect: string | undefined

  constructor(routeConfig: RouteConfig, private readonly query: string) {

    this.blockClass = routeConfig.component
    this.pathname = routeConfig.path
    this.layout = routeConfig.layout
    this.redirect = routeConfig.redirect
  }

  leave() {
    this.block = null
  }

  match(pathname: string) {
    return isEqual(pathname, this.pathname)
  }

  render() {
    if (!this.block) {
      this.block = new this.blockClass({})

      render(this.query, this.block)

      return
    }
  }
}

class Router {
  private static __instance: Router;
  private routes: Route[] = [];
  private currentRoute: Route | null = null;
  private history = window.history;
  private middlewares: Record<string, (route: Route) => Route>

  constructor(private readonly rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance
    }

    this.routes = []

    Router.__instance = this

    this.middlewares = {
      authMiddleware: (route: Route) => {
        if (!store.getState().user && this.currentRoute?.pathname !== signInRoute.path) this.go(signInRoute.path)

        return route
      },
      redirectMiddleware: (route: Route) => {
        if (route?.redirect && this.currentRoute?.pathname !== route.redirect) {
          if (this.getRoute(route.redirect)) this.go(route.redirect)
          else this.go(notFoundRoute.path)
        }

        return route
      }
    }
  }

  public use(routeConfig: RouteConfig) {
    const { path } = routeConfig

    if (!this.getRoute(path)) {
      const route = new Route(routeConfig, this.rootQuery)

      this.routes.push(route)
    }

    console.log(this)

    return this
  }

  public start() {
    window.onpopstate = (event: PopStateEvent) => {
      const target = event.currentTarget as Window

      this._onRoute(target.location.pathname)
    }

    this._onRoute(window.location.pathname)
  }

  private _onRoute(pathname: string) {
    const route = this.getRoute(pathname)

    if (!route) {
      if (!this.currentRoute?.match(notFoundRoute.path)) this.go(notFoundRoute.path)
    } else if (route?.redirect) {
      if (this.getRoute(route.redirect)) this.go(route.redirect)
      else this.go(notFoundRoute.path)
    } else if (!store.getState().user && ![signInRoute.path, signUpRoute.path].includes(pathname)) {
      this.go(signInRoute.path)
    } else {
      if (this.currentRoute && this.currentRoute !== route) {
        this.currentRoute.leave()
      }

      this.currentRoute = route

      route?.render()
    }
  }

  resolve(route: Route) {
    if (this.currentRoute && this.currentRoute !== route) {
      this.currentRoute.leave()
    }

    this.currentRoute = route

    route?.render()
  }

  public beforeEach(route: Route) {
    return Object.values(this.middlewares).reduce((acc: Route, cur: (route: Route) => Route) => {
      return cur(acc)
    }, route)

    // Object.values(this.middlewares).forEach((middleware) => route = middleware(route))
  }

  // private redirectMiddleware(route: Route) {
  //   if (route?.redirect) {
  //     if (this.getRoute(route.redirect)) this.go(route.redirect)
  //     else this.go(notFoundRoute.path)
  //   }
  //
  //   return true
  // }
  //
  // private authMiddleware(route: Route) {
  //   if (!store.getState().user && route.pathname !== signInRoute.path) {
  //     this.go(signInRoute.path)
  //   }
  //
  //   return true
  // }

  public go(pathname: string) {
    this.history.pushState({}, '', pathname)

    this._onRoute(pathname)
  }

  public back() {
    this.history.back()
  }

  public forward() {
    this.history.forward()
  }

  private getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname)) || null
  }
}

export default new Router('#app')
