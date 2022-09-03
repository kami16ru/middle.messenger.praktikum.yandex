import { routes } from './router/index'
import { Router } from './lib/dom/Router'

document.addEventListener('DOMContentLoaded', async () => {
  const app = '.app'

  window.onload = function () {
    let router = new Router(app)

    routes.forEach((route) => router = router.use(route))
    router.start()
  }
})
