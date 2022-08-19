import ChatPageComponent from '../modules/chat/pages/index'
import LoginPageComponent from '../modules/auth/pages/login/index'
import RegisterPageComponent from '../modules/auth/pages/register/index'
import ShowProfilePageComponent from '../modules/profile/pages/show/index'
import EditProfilePageComponent from '../modules/profile/pages/edit/index'
import EditPasswordPageComponent from '../modules/profile/pages/edit-password/index'
import NotFoundPageComponent from '../modules/error/pages/404/index'
import ServerErrorPageComponent from '../modules/error/pages/500/index'
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
  component: NotFoundPageComponent,
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
  component: ChatPageComponent,
  layout: 'chat'
}, {
  name: 'auth-login',
  path: '/login',
  component: LoginPageComponent,
  layout: 'auth'
}, {
  name: 'auth-register',
  path: '/register',
  component: RegisterPageComponent,
  layout: 'auth'
}, {
  name: 'profile',
  path: '/profile',
  redirect: 'profile-show',
  component: AbstractComponentInstance
}, {
  name: 'profile-show',
  path: '/profile/show',
  component: ShowProfilePageComponent,
  layout: 'default'
}, {
  name: 'profile-edit',
  path: '/profile/edit',
  component: EditProfilePageComponent,
  layout: 'default'
}, {
  name: 'profile-edit-password',
  path: '/profile/edit-password',
  component: EditPasswordPageComponent,
  layout: 'default'
}, {
  name: '404',
  path: '/404',
  component: NotFoundPageComponent,
  layout: 'error'
}, {
  name: '500',
  path: '/500',
  component: ServerErrorPageComponent,
  layout: 'error'
}]
