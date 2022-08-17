import { RouteConfig, routes } from './router/index'
import chatLayout from './layouts/chat'
import defaultLayout from './layouts/default'
import authLayout from './layouts/auth'
import errorLayout from './layouts/error'
import templateEngine from './lib/dom/templateEngine'
import { IComponent } from './lib/dom/types'

type Layouts = Record<string, IComponent>

const layouts: Layouts = {
  chatLayout,
  defaultLayout,
  authLayout,
  errorLayout
}

function getLayout(name: string): IComponent {
  return layouts[`${name}Layout`] ? layouts[`${name}Layout`] : layouts.defaultLayout
}

document.addEventListener('DOMContentLoaded', async () => {
  const app = document.getElementById('app')

  window.onload = function () {
    const path = window.location.pathname
    let routeConfig: RouteConfig = routes.find((route) => route.path === path)

    if (routeConfig) {
      if (routeConfig.redirect) routeConfig = routes.find((route) => route.name === routeConfig.redirect)
    } else {
      routeConfig = routes.find((route) => route.name === '404')
    }

    const { component } = routeConfig

    if (routeConfig.layout) {
      const layout = getLayout(routeConfig.layout)

      templateEngine.render(app, layout)

      const layoutDOM = document.querySelector(layout.selector)

      templateEngine.render(layoutDOM, component)
    } else {
      templateEngine.render(app, component)
    }
  }
})