import API, { SignInRequest, SignUpRequest } from './authApi'
import store from '../../../lib/dom/Store'
import router from '../../../lib/dom/Router'

export class AuthController {
  private readonly api;

  constructor() {
    this.api = API
  }

  async signIn(data: SignInRequest) {
    try {
      await this.api.signIn(data)

      await this.fetchUser()

      router.go('/settings')
    } catch (e: any) {
      console.error(e)
    }
  }

  async signUp(data: SignUpRequest) {
    try {
      await this.api.signUp(data)

      await this.fetchUser()

      router.go('/profile')
    } catch (e: any) {
      console.error(e.message)
    }
  }

  async fetchUser() {
    const user = await this.api.whoAmI()

    store.set('user', user)

    console.log(store.getState())
  }

  async logout() {
    try {
      await this.api.logout()

      router.go('/')
    } catch (e: any) {
      console.error(e.message)
    } finally {
      store.set('user', null)
    }
  }
}

export const authController = new AuthController()
