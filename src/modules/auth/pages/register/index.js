import template from './template.hbs'
import '../../../../components/input'
import Component from '../../../../lib/dom/Component'
import Button from '../../../../components/ui/button'
import { loading } from '../../../../lib/helpers/components'

const registerBtnId = 'register-submit'
const redirectLoginBtnId = 'register-go-login'
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
    super.mounted()

    const submitBtn = document.getElementById(registerBtnId)

    submitBtn.addEventListener('click', async (e) => {
      e.preventDefault()
      const anchor = e.target.closest('a')

      if (!anchor) return

      await submitRegisterForm()

      window.location = anchor.getAttribute('href')
    })

    function submitRegisterForm() {
      const loadingElement = document.getElementById(registerLoadingId)
      const form = document.getElementById('register-form')

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

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          form.reset()

          loading({ target: submitBtn, loadingElement, loading: false })
          console.log(model)

          resolve()
        }, 2000)
      })
    }
  }
}

export default new RegisterPage({
  template,
  props: {
    form,
    registerBtnId,
    loadingId: registerLoadingId,
    RedirectLoginBtn: Button.template({
      ...Button.props,
      class: 'white',
      value: 'Уже зарегистрированы',
      href: '/login',
      id: redirectLoginBtnId,
      outline: true
    }),
    RegisterBtn: Button.template({
      ...Button.props,
      class: 'bg-primary white',
      value: 'Создать аккаунт',
      href: '/',
      id: registerBtnId
    })
  }
})