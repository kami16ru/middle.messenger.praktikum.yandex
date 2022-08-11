import Handlebars from '../../plugins/handlebars'
import RegisterPage from './template.hbs'

import '../../components/input'
import '../../components/button'

Handlebars.registerPartial('RegisterPage', RegisterPage)

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

export default {
  template: RegisterPage,
  props: {
    form,
    registerBtnId,
    goHomeBtnId,
    loadingId: registerLoadingId,
  },
  mounted: () => import('./mounted'),
}