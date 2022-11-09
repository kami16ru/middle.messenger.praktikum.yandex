import icons from './icons'

export const navDrawerList = [{
  title: 'На главную',
  to: '/',
  icon: icons.home
}, {
  title: 'Профайл',
  to: '/settings',
  icon: icons.profile
}, {
  title: 'Чат',
  to: '/messenger',
  icon: icons.chat
}, {
  title: 'Выход',
  to: '/logout',
  icon: icons.logout
}]

export type NavDrawerHeaderConfig = {
  name: string
  icon: string
  component: string,
  active: boolean,
  class?: string
}

export const navDrawerHeader = [{
  name: 'chatList',
  class: 'mdi mdi-chat-processing nav-drawer__header-icon h2',
  component: 'chatList',
  active: true
}, {
  name: 'navList',
  class: 'mdi mdi-backburger nav-drawer__header-icon h2',
  component: 'navList',
  active: false
}]
