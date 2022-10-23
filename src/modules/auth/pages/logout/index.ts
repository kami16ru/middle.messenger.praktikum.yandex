import Component from '../../../../lib/dom/Component'
import template from '../login/template.hbs'
import { authController } from '../../services/AuthController'
import { withStore } from '../../../../lib/dom/Store'

class LogoutPageComponent extends Component {
  constructor() {
    super({
      template
    })
  }

  async mounted() {
    super.mounted()

    await authController.logout()
  }
}

export const LogoutPage = withStore((state) => ({ user: state.user }))(LogoutPageComponent)
