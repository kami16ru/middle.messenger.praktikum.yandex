import { ChatPage } from '../modules/chat/pages/index'
import { LoginPage } from '../modules/auth/pages/login/index'
import { RegisterPage } from '../modules/auth/pages/register/index'
import { ShowProfilePage } from '../modules/profile/pages/show/index'
import { EditProfilePage } from '../modules/profile/pages/edit/index'
import { EditPwdPage } from '../modules/profile/pages/edit-password/index'
import { NotFoundPage } from '../modules/error/pages/404/index'
import { ServerErrorPage } from '../modules/error/pages/500/index'
import { IComponent } from '../lib/dom/types'
import Component from '../lib/dom/Component'

class DummyComponent extends Component {}

const AbstractComponentInstance = new DummyComponent({ template: () => '' })

export type RouteConfig = {
  name: string
  path: string
  redirect?: string
  layout?: string
  component: IComponent
}

export const NotFoundRoute: RouteConfig = {
  name: '404',
  path: '/404',
  component: new NotFoundPage(),
  layout: 'error'
}

export const routes: RouteConfig[] = [{
  name: 'home',
  path: '/',
  redirect: 'chat',
  component: AbstractComponentInstance
}, {
  name: 'chat',
  path: '/chat',
  component: new ChatPage(),
  layout: 'chat'
}, {
  name: 'auth-login',
  path: '/login',
  component: new LoginPage(),
  layout: 'auth'
}, {
  name: 'auth-register',
  path: '/register',
  component: new RegisterPage(),
  layout: 'auth'
}, {
  name: 'profile',
  path: '/profile',
  redirect: 'profile-show',
  component: AbstractComponentInstance
}, {
  name: 'profile-show',
  path: '/profile/show',
  component: new ShowProfilePage(),
  layout: 'default'
}, {
  name: 'profile-edit',
  path: '/profile/edit',
  component: new EditProfilePage(),
  layout: 'default'
}, {
  name: 'profile-edit-password',
  path: '/profile/edit-password',
  component: new EditPwdPage(),
  layout: 'default'
}, {
  name: '404',
  path: '/404',
  component: new NotFoundPage(),
  layout: 'error'
}, {
  name: '500',
  path: '/500',
  component: new ServerErrorPage(),
  layout: 'error'
}]
