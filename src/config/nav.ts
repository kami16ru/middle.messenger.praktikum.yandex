import icons from './icons'

export default {
  drawer: [{
    title: 'На главную',
    href: '/',
    icon: icons.home
  }, {
    title: 'Профайл',
    href: '/profile/show',
    icon: icons.profile
  }, {
    title: 'Чат',
    href: '/chat',
    icon: icons.chat
  }, {
    title: 'Выход',
    href: '/logout',
    icon: icons.logout
  }]
}
