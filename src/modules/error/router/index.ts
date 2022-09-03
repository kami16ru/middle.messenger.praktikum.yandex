import { RouteConfig } from '../../../lib/dom/types'
import { NotFoundPage } from '../pages/404/index'
import { ServerErrorPage } from '../pages/500/index'

export const NotFoundRoute: RouteConfig = {
  name: '404',
  path: '/404',
  component: NotFoundPage,
  layout: 'error'
}

export const errorRoutes: RouteConfig[] = [
  NotFoundRoute,
  {
    name: '500',
    path: '/500',
    component: ServerErrorPage,
    layout: 'error'
  }
]
