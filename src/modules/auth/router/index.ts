import { RouteConfig } from '../../../lib/dom/types'
import { LoginPage } from '../pages/login/index'
import { RegisterPage } from '../pages/register/index'

export const authRoutes: RouteConfig[] = [{
  name: 'auth-login',
  path: '/sign-in',
  component: LoginPage,
  layout: 'auth'
}, {
  name: 'auth-register',
  path: '/register',
  component: RegisterPage,
  layout: 'auth'
}]
