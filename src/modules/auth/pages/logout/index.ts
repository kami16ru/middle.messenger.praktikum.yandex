import Component from '../../../../lib/dom/Component'
import template from '../login/template.hbs'
import { logout } from '../../../../services/api/auth'

export class LogoutPage extends Component {
  constructor() {
    super({
      template
    })
  }

  async mounted() {
    super.mounted()

    await logout()
      .then((res) => {
        console.log(res)
        window.location.href = '/'
      })
      .catch((e) => {
        console.log(e)
        window.location.href = '/'
      })
  }
}
