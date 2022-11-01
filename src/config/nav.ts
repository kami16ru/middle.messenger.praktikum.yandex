import icons from './icons'
import { ChatsList } from '../modules/chat/components/chat-list/index'
// import { NavDrawerList } from '../components/ui/nav/drawer/list/index'
// import Block from '../utils/Block'
// import {State} from "../utils/Store";

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
    component: ChatsList,
    active: false
  }, {
    icon: 'mdi mdi-backburger',
    component: ChatsList,
    active: true
  }]
}
