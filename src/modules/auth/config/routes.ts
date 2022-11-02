import { RouteConfig } from '../../../lib/dom/types'
import { LoginPage } from '../pages/login'
import { RegisterPage } from '../pages/register'
import { LogoutPage } from '../pages/logout'

export const signInRoute = {
  name: 'auth-login',
  path: '/sign-in',
  component: LoginPage,
  layout: 'auth'
}

export const authRoutes: RouteConfig[] = [signInRoute, {
  name: 'auth-register',
  path: '/register',
  component: RegisterPage,
  layout: 'auth'
}, {
  name: 'auth-logout',
  path: '/logout',
  component: LogoutPage
}]
