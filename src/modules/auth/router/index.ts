import { RouteConfig } from '../../../lib/dom/types'
import { LoginPage } from '../pages/login/index'
import { RegisterPage } from '../pages/register/index'
import { LogoutPage } from '../pages/logout/index'

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
