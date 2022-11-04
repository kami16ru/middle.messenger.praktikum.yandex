import API, { SignInRequest, SignUpRequest } from './authApi'
import store from '../../../lib/dom/Store'
import router from '../../../lib/dom/Router'
import { HTTPErrorHandler } from '../../../lib/http/HTTPErrorHandler'

export class AuthController {
  private readonly api;

  constructor() {
    this.api = API
  }

  async signIn(data: SignInRequest) {
    try {
      await this.api.signIn(data)

      await this.fetchUser()

      router.go('/messenger')
    } catch (e) {
      HTTPErrorHandler.handleHttp(e)
    }
  }

  async signUp(data: SignUpRequest) {
    try {
      await this.api.signUp(data)

      await this.fetchUser()

      router.go('/messenger')
    } catch (e) {
      HTTPErrorHandler.handleHttp(e)
    }
  }

  async fetchUser() {
    try {
      const user = await this.api.whoAmI()

      store.set('user', user)
    } catch (e) {
      HTTPErrorHandler.handleHttp(e)
    }
  }

  async logout() {
    try {
      await this.api.logout()
    } catch (e) {
      HTTPErrorHandler.handleHttp(e)
    } finally {
      store.set('user', null)
      router.go('/sign-in')
    }
  }
}

export const authController = new AuthController()
