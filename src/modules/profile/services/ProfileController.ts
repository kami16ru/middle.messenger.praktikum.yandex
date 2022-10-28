import API, { ProfileEditRequest, ProfileEditPasswordRequest } from './api'
import router from '../../../lib/dom/Router'
import { authController } from '../../auth/services/AuthController'

export class ProfileController {
  private readonly api;

  constructor() {
    this.api = API
  }

  async edit(data: ProfileEditRequest) {
    try {
      await this.api.editProfile(data)

      await authController.fetchUser()

      router.go('/profile/show')
    } catch (e: any) {
      console.error(e)
      router.go('/')
    }
  }

  async editPassword(data: ProfileEditPasswordRequest) {
    try {
      await this.api.editPassword(data)

      router.go('/profile/show')
    } catch (e: any) {
      console.error(e.message)
      router.go('/')
    }
  }
}

export const profileController = new ProfileController()
