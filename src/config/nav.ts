import icons from './icons'
import { ChatList } from '../modules/chat/components/chat-list/index'
import { NavDrawerList } from '../components/ui/nav/drawer/list/index'
import Component from '../lib/dom/Component'

export const navDrawerList = [{
  title: 'На главную',
  href: '/',
  icon: icons.home
}, {
  title: 'Профайл',
  href: '/settings',
  icon: icons.profile
}, {
  title: 'Чат',
  href: '/messenger',
  icon: icons.chat
}, {
  title: 'Выход',
  href: '/logout',
  icon: icons.logout
}]

export type NavDrawerHeaderConfig = {
  name: string
  icon: string
  component: Component
  active: boolean,
  class?: string,
  iconId: string
}

export const navDrawerHeader = [{
  name: 'chat',
  icon: 'mdi mdi-chat-processing',
  component: ChatList,
  active: true,
  class: 'chat-list'
}, {
  name: 'nav',
  icon: 'mdi mdi-backburger',
  component: NavDrawerList,
  active: false
}]

export default {
  drawer: [{
    title: 'На главную',
    href: '/',
    icon: icons.home
  }, {
    title: 'Профайл',
    href: '/settings',
    icon: icons.profile
  }, {
    title: 'Чат',
    href: '/messenger',
    icon: icons.chat
  }, {
    title: 'Выход',
    href: '/logout',
    icon: icons.logout
  }],
  drawerHeader: [{
    icon: 'mdi mdi-chat-processing',
    component: ChatList,
    active: false
  }, {
    icon: 'mdi mdi-backburger',
    component: NavDrawerList,
    active: true
  }]
}
