import Router from './lib/dom/Router'
import { authController as AuthController } from './modules/auth/services/AuthController'
import { routes } from './config/routes'


import './assets/css/app.css'

window.addEventListener('DOMContentLoaded', async () => {
  routes.forEach((routeConfig) => {
    Router.use(routeConfig)
  })
  await AuthController.fetchUser()
  Router.start()
})
