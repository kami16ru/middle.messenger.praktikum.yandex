import template from './template.hbs'
import './style.css'
import '../../components/input'
import '../../components/button'
import Component from '../../lib/dom/Component'

const loginBtnId = 'login-submit'
const registerBtnId = 'login-new-user'
const loginLoadingId = 'login-submit-loading'
const form = {
  email: { id: 'form-login-email', name: 'email', label: 'Email', helper: 'Email пользователя' },
  password: { id: 'form-login-password', name: 'password', label: 'Пароль', helper: '' }
}

class LoginPage extends Component {
  constructor(options) {
    super(options)
  }

  async mounted() { return import('./mounted') }
}

export default new LoginPage({
  template,
  props: {
    href: '/register',
    value: 'Нет аккаунта?',
    buttonId: loginBtnId,
    registerBtnId,
    loginBtnId,
    loadingId: loginLoadingId,
    form
  }
})
