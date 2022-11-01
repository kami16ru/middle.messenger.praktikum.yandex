import { RouteConfig } from '../../../lib/dom/types'
import { MessengerPage } from '../pages/messenger/index'

export const chatRoutes: RouteConfig[] = [
  {
    name: 'chat',
    path: '/messenger',
    component: MessengerPage,
    layout: 'chat'
  }
]
