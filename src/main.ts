import Router from './lib/dom/Router'
import { authController as AuthController } from './modules/auth/services/AuthController'
import { routes } from './config/routes'

window.addEventListener('DOMContentLoaded', async () => {
  try {
    routes.forEach((routeConfig) => {
      Router.use(routeConfig)
    })

    try {
      await AuthController.fetchUser()

      Router.start()

    } catch (e) {
      console.log(e)
      Router.start()
    }
  } catch (e) {
    console.log(e)
  }
})
