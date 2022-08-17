import './style.css'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import template from './template.hbs'
import Component from '../../../../lib/dom/Component'
import Button from '../../../../components/ui/button/index'
import { loading } from '../../../../lib/helpers/components'
import Input from '../../../../components/ui/input/index'
import Validator from '../../../../lib/validation/Validator'
import { ComponentOptions } from '../../../../lib/dom/types'

const registerBtnId = 'register-submit'
const redirectLoginBtnId = 'register-go-login'
const registerLoadingId = 'register-submit-loading'

const form = {
  email: { id: 'form-register-email', name: 'email', label: 'Почта', helper: 'Email пользователя', rules: ['isEmail'] },
  login: { id: 'form-register-login', name: 'login', label: 'Логин', rules: ['isLogin'] },
  first_name: { id: 'form-register-first-name', name: 'first_name', label: 'Имя', helper: 'Как вас зовут?', rules: ['isName'] },
  second_name: { id: 'form-register-second-name', name: 'second_name', label: 'Фамилия', rules: ['isName'] },
  phone: { id: 'form-register-phone', name: 'phone', label: 'Телефон', helper: 'От 10 до 15 символов, состоит из цифр, может начинается с плюса', rules: ['isPhone'] },
  password: { id: 'form-register-password', name: 'password', label: 'Пароль', helper: 'Хотя бы одна заглавная буква, цифра, минимум 8 символов, максимум 40', type: 'password', rules: ['isPassword'] },
  passwordConfirm: { id: 'form-register-password-confirm', label: 'Пароль еще раз', helper: 'Должны совпадать', type: 'password', rules: ['isPassword'] }
}
const inputs = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  InputEmail: Input.template({
    ...Input.props,
    input: form.email
  }),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  InputPassword: Input.template({
    ...Input.props,
    input: form.password
  }),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  InputLogin: Input.template({
    ...Input.props,
    input: form.login
  }),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  InputFirstName: Input.template({
    ...Input.props,
    input: form.first_name
  }),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  InputSecondName: Input.template({
    ...Input.props,
    input: form.second_name
  }),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  InputPhone: Input.template({
    ...Input.props,
    input: form.phone
  }),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  InputPasswordConfirm: Input.template({
    ...Input.props,
    input: form.passwordConfirm
  })
}

const buttons = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  RedirectLoginBtn: Button.template({
    ...Button.props,
    class: 'white',
    value: 'Уже зарегистрированы',
    href: '/login',
    id: redirectLoginBtnId,
    outline: true
  }),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  RegisterBtn: Button.template({
    ...Button.props,
    class: 'bg-primary white',
    value: 'Создать аккаунт',
    href: '/',
    id: registerBtnId
  })
}

class RegisterPage extends Component {
  constructor(options: ComponentOptions) {
    super(options)
  }

  async mounted() {
    super.mounted()
    this.initValidation()

    const submitBtn = document.getElementById(registerBtnId)

    submitBtn.addEventListener('click', async (e) => {
      e.preventDefault()
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const anchor = e.target.closest('a')

      if (!anchor) return

      await this.submitRegisterForm(submitBtn)

      window.location = anchor.getAttribute('href')
    })
  }

  initValidation() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const validator = new Validator({ form })

    validator.initValidation()
  }

  submitRegisterForm(submitBtn: HTMLElement) {
    const loadingElement = document.getElementById(registerLoadingId)
    const form = document.getElementById('register-form')

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const formData = new FormData(form)
    const email = formData.get('email')
    const login = formData.get('login')
    const first_name = formData.get('first_name')
    const second_name = formData.get('second_name')
    const phone = formData.get('phone')
    const password = formData.get('password')

    const model = {
      email,
      login,
      first_name,
      second_name,
      phone,
      password
    }

    loading({ target: submitBtn, loadingElement, loading: true })

    // eslint-disable-next-line
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        form.reset()

        loading({ target: submitBtn, loadingElement, loading: false })
        console.log(model)

        resolve(true)
      }, 2000)
    })
  }
}

export default new RegisterPage({
  template,
  props: {
    form,
    loadingId: registerLoadingId,
    ...buttons,
    ...inputs
  },
  components: { Input }
})