import { RouteConfig } from '../lib/dom/types'
import Block from '../lib/dom/Block'
import { authRoutes } from '../modules/auth/config/routes'
import { chatRoutes } from '../modules/chat/config/routes'
import { profileRoutes } from '../modules/profile/config/routes'
import { NotFoundRoute } from '../modules/error/config/routes'

class DummyComponent extends Block {}

export const notFoundRoute = NotFoundRoute

export const routes: RouteConfig[] = [
  {
    name: 'home',
    path: '/',
    redirect: '/settings',
    component: DummyComponent
  },
  // ...errorRoutes,
  notFoundRoute,
  ...authRoutes,
  ...chatRoutes,
  ...profileRoutes
]
