import { RouteConfig } from '../lib/dom/types'
import Block from '../lib/dom/Block'
import { authRoutes } from '../modules/auth/router/index'
import { chatRoutes } from '../modules/chat/router/index'
import { profileRoutes } from '../modules/profile/router/index'
import { NotFoundRoute } from '../modules/error/router/index'

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
