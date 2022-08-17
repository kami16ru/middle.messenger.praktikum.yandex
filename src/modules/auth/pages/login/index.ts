import template from './template.hbs'
import './style.css'
import Component from '../../../../lib/dom/Component'
import Button from '../../../../components/ui/button/index'
import { loading } from '../../../../lib/helpers/components'
import Input from '../../../../components/ui/input/index'
import Validator from '../../../../lib/validation/Validator'
import { ComponentOptions } from '../../../../lib/dom/types'

const loginBtnId = 'login-submit'
const registerBtnId = 'login-new-user'
const loginLoadingId = 'login-submit-loading'
const form = {
  email: { id: 'form-login-email', name: 'email', label: 'Email', helper: 'Email пользователя', rules: ['isEmail'] },
  password: { id: 'form-login-password', name: 'password', label: 'Пароль', helper: '', type: 'password', rules: ['isPassword'] }
}
const buttons = {
  LoginBtn: Button.template({
    ...Button.props,
    class: 'bg-primary white',
    value: 'Войти',
    href: '/',
    id: loginBtnId
  }),
  RegisterBtn: Button.template({
    ...Button.props,
    class: 'white',
    value: 'Регистрация',
    href: '/register',
    id: registerBtnId,
    outline: true
  })
}
const inputs = {
  InputEmail: Input.template({
    ...Input.props,
    input: form.email
  }),
  InputPassword: Input.template({
    ...Input.props,
    input: form.password
  })
}

class LoginPage extends Component {
  constructor(options: ComponentOptions) {
    super(options)
  }

  async mounted() {
    super.mounted()
    this.initValidation()

    const submitBtn = document.getElementById(loginBtnId)

    submitBtn.addEventListener('click', async (e) => {
      e.preventDefault()
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const anchor = e.target.closest('a')

      if (!anchor) return

      console.log('btn clicked')

      await this.submitLoginForm(submitBtn)

      window.location = anchor.getAttribute('href')
    })
  }

  initValidation() {
    const validator = new Validator({ form })

    validator.initValidation()
  }

  async submitLoginForm(submitBtn: HTMLElement) {
    const loadingElement = document.getElementById(loginLoadingId)
    const form = document.getElementById('login-form')

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const formData = new FormData(form)
    const email = formData.get('email')
    const password = formData.get('password')

    const credentials = {
      email,
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
        console.log(credentials)

        resolve(true)
      }, 2000)
    })
  }
}

export default new LoginPage({
  template,
  props: {
    loadingId: loginLoadingId,
    form,
    ...buttons,
    ...inputs
  },
  components: { Button, Input }
})
