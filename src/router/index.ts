import ChatPageComponent from '../modules/chat/pages'
import LoginPageComponent from '../modules/auth/pages/login'
import RegisterPageComponent from '../modules/auth/pages/register'
import ShowProfilePageComponent from '../modules/profile/pages/show'
import EditProfilePageComponent from '../modules/profile/pages/edit'
import EditPasswordPageComponent from '../modules/profile/pages/edit-password'
import NotFoundPageComponent from '../modules/error/pages/404'
import ServerErrorPageComponent from '../modules/error/pages/500'
import { IComponent } from '../lib/dom/types'

export type RouteConfig = {
  name: string
  path: string
  redirect?: string
  layout?: string
  component?: IComponent
}

export const routes: RouteConfig[] = [{
  name: 'home',
  path: '/',
  redirect: 'chat'
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
  redirect: 'profile-show'
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
