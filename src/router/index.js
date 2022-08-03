import ChatPageComponent from '../pages/chat'
import LoginPageComponent from '../pages/login'
import RegisterPageComponent from '../pages/register'
import ShowProfilePageComponent from '../pages/profile/show'
import EditProfilePageComponent from '../pages/profile/edit'
import EditPasswordPageComponent from '../pages/profile/edit-password'
import NotFoundPageComponent from '../pages/error/404'
import ServerErrorPageComponent from '../pages/error/500'

export const routes = [{
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