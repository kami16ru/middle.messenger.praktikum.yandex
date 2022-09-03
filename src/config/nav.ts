import icons from './icons'

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
  }]
}
