import { RouteConfig, routes, NotFoundRoute } from './router/index'
import { ChatLayout } from './layouts/chat/index'
import { DefaultLayout } from './layouts/default/index'
import { AuthLayout } from './layouts/auth/index'
import { ErrorLayout } from './layouts/error/index'
import templateEngine from './lib/dom/templateEngine'
import { IComponent } from './lib/dom/types'

type Layouts = Record<string, IComponent>

const layouts: Layouts = {
  chatLayout: new ChatLayout(),
  defaultLayout: new DefaultLayout(),
  authLayout: new AuthLayout(),
  errorLayout: new ErrorLayout()
}

function getLayout(name: string): IComponent {
  return layouts[`${name}Layout`] ? layouts[`${name}Layout`] : layouts.defaultLayout
}

document.addEventListener('DOMContentLoaded', async () => {
  const app = document.getElementById('app')

  window.onload = function () {
    const path = window.location.pathname

    const routeConfig: RouteConfig = routes.find((route) => route.path === path) ?? NotFoundRoute

    if (routeConfig.redirect) window.location.href = routeConfig.redirect

    const { component } = routeConfig

    if (routeConfig.layout) {
      const layout = getLayout(routeConfig.layout)

      templateEngine.render(app as HTMLElement, layout)

      const layoutDOM = document.querySelector(layout.selector ?? '')

      templateEngine.render(layoutDOM as HTMLElement, component)
    } else {
      templateEngine.render(app as HTMLElement, component)
    }
  }
})
