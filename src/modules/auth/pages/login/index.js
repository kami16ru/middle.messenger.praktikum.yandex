import template from './template.hbs'
import './style.css'
import '../../../../components/input'
import '../../../../components/button'
import Component from '../../../../lib/dom/Component'
import Button from '../../../../components/ui/button'
import { loading } from '../../../../lib/helpers/components'

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

  async mounted() {
    super.mounted()

    const loginBtnId = 'login-submit'
    const registerBtnId = 'login-new-user'
    const loginLoadingId = 'login-submit-loading'

    const submitBtn = document.getElementById(loginBtnId)

    submitBtn.addEventListener('click', async (e) => {
      e.preventDefault()
      const anchor = e.target.closest('a')

      if (!anchor) return

      console.log('btn clicked')

      await submitLoginForm()

      window.location = anchor.getAttribute('href')
    })

    async function submitLoginForm() {
      const loadingElement = document.getElementById(loginLoadingId)
      const form = document.getElementById('login-form')

      const formData = new FormData(form)
      const email = formData.get('email')
      const password = formData.get('password')

      const credentials = {
        email,
        password
      }

      loading({ target: submitBtn, loadingElement, loading: true })

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          form.reset()

          loading({ target: submitBtn, loadingElement, loading: false })
          console.log(credentials)

          resolve()
        }, 2000)
      })
    }
  }
}

export default new LoginPage({
  template,
  props: {
    loadingId: loginLoadingId,
    form,
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
})
