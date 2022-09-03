import { ChatPage } from '../modules/chat/pages/chat/index'
import { LoginPage } from '../modules/auth/pages/login/index'
import { RegisterPage } from '../modules/auth/pages/register/index'
import { ShowProfilePage } from '../modules/profile/pages/show/index'
import { EditProfilePage } from '../modules/profile/pages/edit/index'
import { EditPwdPage } from '../modules/profile/pages/edit-password/index'
import { NotFoundPage } from '../modules/error/pages/404/index'
import { ServerErrorPage } from '../modules/error/pages/500/index'
import { RouteConfig } from '../lib/dom/types'
import Component from '../lib/dom/Component'

class DummyComponent extends Component {}

export const NotFoundRoute: RouteConfig = {
  name: '404',
  path: '/404',
  component: NotFoundPage,
  layout: 'error'
}

export const routes: RouteConfig[] = [NotFoundRoute, {
  name: 'home',
  path: '/',
  redirect: 'chat',
  component: DummyComponent
}, {
  name: 'chat',
  path: '/messenger',
  component: ChatPage,
  layout: 'chat'
}, {
  name: 'auth-login',
  path: '/sign-in',
  component: LoginPage,
  layout: 'auth'
}, {
  name: 'auth-register',
  path: '/register',
  component: RegisterPage,
  layout: 'auth'
}, {
  name: 'profile',
  path: '/settings',
  component: ShowProfilePage,
  layout: 'default'
}, {
  name: 'profile-edit',
  path: '/settings/edit',
  component: EditProfilePage,
  layout: 'default'
}, {
  name: 'profile-edit-password',
  path: '/settings/edit-password',
  component: EditPwdPage,
  layout: 'default'
}, {
  name: '500',
  path: '/500',
  component: ServerErrorPage,
  layout: 'error'
}]
