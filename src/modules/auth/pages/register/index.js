import template from './template.hbs'
import '../../../../components/input'
import '../../../../components/button'
import Component from '../../../../lib/dom/Component'

const registerBtnId = 'register-submit'
const goHomeBtnId = 'register-go-home'
const registerLoadingId = 'register-submit-loading'

const form = {
  email: { id: 'form-register-email', name: 'email', label: 'Почта', helper: 'Email пользователя' },
  login: { id: 'form-register-login', name: 'login', label: 'Логин' },
  first_name: { id: 'form-register-first-name', name: 'first_name', label: 'Имя', helper: 'Как вас зовут?' },
  second_name: { id: 'form-register-second-name', name: 'second_name', label: 'Фамилия' },
  phone: { id: 'form-register-phone', name: 'phone', label: 'Телефон' },
  password: { id: 'form-register-password', name: 'password', label: 'Пароль', helper: 'Минимум 8 символов' },
  passwordConfirm: { id: 'form-register-password-confirm', label: 'Пароль еще раз', helper: 'Должны совпадать' },
}

class RegisterPage extends Component {
  constructor(options) {
    super(options)
  }

  async mounted() {
    console.log('Register page mounted')

    return import('./mounted')
  }
}

export default new RegisterPage({
  template,
  props: {
    form,
    registerBtnId,
    goHomeBtnId,
    loadingId: registerLoadingId
  }
})
