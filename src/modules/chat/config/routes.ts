import { RouteConfig } from '../../../lib/dom/types'
import { MessengerPage } from '../pages/messenger'

export const chatRoutes: RouteConfig[] = [
  {
    name: 'chat',
    path: '/messenger',
    component: MessengerPage,
    layout: 'chat'
  }
]
