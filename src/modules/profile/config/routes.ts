import { RouteConfig } from '../../../lib/dom/types'
import { ProfileShowPage } from '../pages/show'
import { ProfileEditPage } from '../pages/edit'
import { ProfileEditPasswordPage } from '../pages/edit-password'

export enum ProfileRoutes {
  show = '/settings',
  edit = '/settings/edit',
  editPassword = '/settings/edit-password'
}

export const profileRoutes: RouteConfig[] = [{
  name: 'profile',
  path: ProfileRoutes.show,
  component: ProfileShowPage,
  layout: 'default'
}, {
  name: 'profile-edit',
  path: ProfileRoutes.edit,
  component: ProfileEditPage,
  layout: 'default'
}, {
  name: 'profile-edit-password',
  path: ProfileRoutes.editPassword,
  component: ProfileEditPasswordPage,
  layout: 'default'
}]
