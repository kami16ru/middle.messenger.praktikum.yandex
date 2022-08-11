import { routes } from './router'

import chatLayout from './layouts/chat'
import defaultLayout from './layouts/default'
import authLayout from './layouts/auth'
import errorLayout from './layouts/error'

const layouts = {
  chatLayout,
  defaultLayout,
  authLayout,
  errorLayout,
}

function getLayout(name) {
  return layouts[`${name}Layout`] ? layouts[`${name}Layout`] : layouts.defaultLayout
}

document.addEventListener('DOMContentLoaded', async () => {
  const app = document.getElementById('app')

  window.onload = async function (event) {
    const path = window.location.pathname
    let routeConfig = routes.find((route) => route.path === path)

    if (routeConfig) {
      if (routeConfig.redirect) routeConfig = routes.find((route) => route.name === routeConfig.redirect)
    } else {
      routeConfig = routes.find((route) => route.name === '404')
    }

    const { component } = routeConfig

    if (routeConfig.layout) {
      const layout = getLayout(routeConfig.layout)

      app.innerHTML = layout.template(layout.props)

      await layout.mounted()

      const layoutDOM = document.querySelector(layout.selector)

      layoutDOM.innerHTML = await component.template(component.props)
    } else {
      app.innerHTML = await component.template(component.props)
    }

    await component.mounted()
  }
})
