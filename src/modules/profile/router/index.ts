import { RouteConfig } from '../../../lib/dom/types'
import { ShowProfilePage } from '../pages/show/index'
import { EditProfilePage } from '../pages/edit/index'
import { EditPwdPage } from '../pages/edit-password/index'

export const profileRoutes: RouteConfig[] = [{
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
}]
