import API, { SignInRequest, SignUpRequest } from './authApi'
import store from '../../../utils/Store'
import router from '../../../utils/Router'

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
    } catch (e: any) {
      console.error(e)
      router.go('/')
    }
  }

  async signUp(data: SignUpRequest) {
    try {
      await this.api.signUp(data)

      await this.fetchUser()

      router.go('/settings')
    } catch (e: any) {
      console.error(e.message)
      router.go('/')
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
    } catch (e: any) {
      console.error(e.message)
    } finally {
      store.set('user', null)
      router.go('/')
    }
  }
}

export const authController = new AuthController()
