import { RouteConfig } from '../../../lib/dom/types'
import { ProfileShowPage } from '../pages/show/index'
import { ProfileEditPage } from '../pages/edit/index'
import { ProfileEditPasswordPage } from '../pages/edit-password/index'

export const profileRoutes: RouteConfig[] = [{
  name: 'profile',
  path: '/settings',
  component: ProfileShowPage,
  layout: 'default'
}, {
  name: 'profile-edit',
  path: '/settings/edit',
  component: ProfileEditPage,
  layout: 'default'
}, {
  name: 'profile-edit-password',
  path: '/settings/edit-password',
  component: ProfileEditPasswordPage,
  layout: 'default'
}]
