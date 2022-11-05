import API, { ProfileEditRequest, ProfileEditPasswordRequest } from './api'
import router from '../../../lib/dom/Router'
import { authController } from '../../auth/services/AuthController'
import { HTTPErrorHandler } from '../../../lib/http/HTTPErrorHandler'

export class ProfileController {
  private readonly api;

  constructor() {
    this.api = API
  }

  async edit(data: ProfileEditRequest) {
    try {
      await this.api.editProfile(data)

      await authController.fetchUser()

      router.go('/settings')
    } catch (e: any) {
      HTTPErrorHandler.handleHttp(e)
    }
  }

  async editPassword(data: ProfileEditPasswordRequest) {
    try {
      await this.api.editPassword(data)

      router.go('/settings')
    } catch (e: any) {
      HTTPErrorHandler.handleHttp(e)
    }
  }
}

export const profileController = new ProfileController()
