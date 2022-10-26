import { LoginPage } from './modules/auth/pages/login/index'
import { RegisterPage } from './modules/auth/pages/register/index'
import Router from './utils/Router'
import { ProfilePage } from './modules/profile/pages/show/index'
import { authController as AuthController } from './modules/auth/services/AuthController'
// import { MessengerPage } from './pages/Messenger'

enum Routes {
  Index = '/',
  Register = '/register',
  Profile = '/profile',
  Messenger = '/messenger',
}

window.addEventListener('DOMContentLoaded', async () => {
  Router
    .use(Routes.Index, LoginPage)
    .use(Routes.Register, RegisterPage)
    .use(Routes.Profile, ProfilePage)
    // .use(Routes.Messenger, MessengerPage)

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
      Router.go(Routes.Profile)
    }
  } catch (e) {
    Router.start()

    if (isProtectedRoute) {
      Router.go(Routes.Index)
    }
  }

})
