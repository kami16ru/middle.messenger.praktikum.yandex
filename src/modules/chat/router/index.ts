import { RouteConfig } from '../../../lib/dom/types'
import { ChatPage } from '../pages/chat/index'

export const chatRoutes: RouteConfig[] = [
  {
    name: 'chat',
    path: '/messenger',
    component: ChatPage,
    layout: 'chat'
  }
]
