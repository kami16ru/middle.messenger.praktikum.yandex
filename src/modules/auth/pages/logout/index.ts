import { authController } from '../../services/AuthController'
import Block from '../../../../lib/dom/Block'

export class LogoutPage extends Block {
  protected async init() {
    await authController.logout()
  }
}
