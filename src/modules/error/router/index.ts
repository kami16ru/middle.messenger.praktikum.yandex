import { RouteConfig } from '../../../lib/dom/types'
import { NotFoundPage } from '../pages/404'
import { ServerErrorPage } from '../pages/500'

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
