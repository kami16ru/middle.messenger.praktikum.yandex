import { LoginPage } from './modules/auth/pages/login/index'
import { RegisterPage } from './modules/auth/pages/register/index'
import Router from './utils/Router'
import { ProfileShowPage } from './modules/profile/pages/show/index'
import { ProfileEditPage } from './modules/profile/pages/edit/index'
import { ProfileEditPasswordPage } from './modules/profile/pages/edit-password/index'
import { authController as AuthController } from './modules/auth/services/AuthController'
import { MessengerPage } from './modules/chat/pages/messenger/index'

// import { MessengerPage } from './pages/Messenger'

export enum Routes {
  Index = '/',
  Register = '/register',
  ProfileShow = '/profile/show',
  ProfileEdit = '/profile/edit',
  ProfileEditPassword = '/profile/edit/password',
  Messenger = '/messenger',
}

window.addEventListener('DOMContentLoaded', async () => {
  Router
    .use(Routes.Index, LoginPage)
    .use(Routes.Register, RegisterPage)
    .use(Routes.ProfileShow, ProfileShowPage)
    .use(Routes.ProfileEdit, ProfileEditPage)
    .use(Routes.ProfileEditPassword, ProfileEditPasswordPage)
    .use(Routes.Messenger, MessengerPage)

  let isProtectedRoute = true

  switch (window.location.pathname) {
  case Routes.Index:
  case Routes.Register:
    isProtectedRoute = false
    break
  }

  try {
    await AuthController.fetchUser()

    Router.start()

    if (!isProtectedRoute) {
      Router.go(Routes.ProfileShow)
    }
  } catch (e) {
    Router.start()

    if (isProtectedRoute) {
      Router.go(Routes.Index)
    }
  }

})
