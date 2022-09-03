import { RouteConfig } from '../lib/dom/types'
import Component from '../lib/dom/Component'
import { authRoutes } from '../modules/auth/router/index'
import { chatRoutes } from '../modules/chat/router/index'
import { profileRoutes } from '../modules/profile/router/index'
import { errorRoutes, NotFoundRoute } from '../modules/error/router/index'

class DummyComponent extends Component {}

export const notFoundRoute = NotFoundRoute

export const routes: RouteConfig[] = [
  {
    name: 'home',
    path: '/',
    redirect: 'chat',
    component: DummyComponent
  },
  ...errorRoutes,
  ...authRoutes,
  ...chatRoutes,
  ...profileRoutes
]
