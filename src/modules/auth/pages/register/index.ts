import './style.css'
import template from './template.hbs'
import Component, { createComponentsFromProps } from '../../../../lib/dom/Component'
import { Button } from '../../../../components/ui/button/index'
import { loading } from '../../../../lib/helpers/components'
import { Input } from '../../../../components/ui/input/index'
import Validator from '../../../../lib/validation/Validator'
import { ComponentOptions } from '../../../../lib/dom/types'
import { FormConfig } from '../../../../components/ui/input/types'
import {signUp, SignUpData} from '../../../../services/api/auth'

const registerLoadingId = 'register-submit-loading'

const form: FormConfig[] = [
  { id: 'form-register-email', name: 'email', label: 'Почта', helper: 'Email пользователя', rules: ['isEmail'], value: '' },
  { id: 'form-register-login', name: 'login', label: 'Логин', rules: ['isLogin'], value: '' },
  { id: 'form-register-first-name', name: 'first_name', label: 'Имя', helper: 'Как вас зовут?', rules: ['isName'], value: '' },
  { id: 'form-register-second-name', name: 'second_name', label: 'Фамилия', rules: ['isName'], value: '' },
  { id: 'form-register-phone', name: 'phone', label: 'Телефон', helper: 'От 10 до 15 символов, состоит из цифр, может начинается с плюса', rules: ['isPhone'], value: '' },
  { id: 'form-register-password', name: 'password', label: 'Пароль', helper: 'Хотя бы одна заглавная буква, цифра, минимум 8 символов, максимум 40', type: 'password', rules: ['isPassword'], value: '' },
  { id: 'form-register-password-confirm', name: 'passwordConfirm', label: 'Пароль еще раз', helper: 'Должны совпадать', type: 'password', rules: ['isPassword'], value: '' }
]
const inputComponents = createComponentsFromProps(form, Input)
// const inputTemplates = getTemplatesFromComponents(inputComponents)

const redirectLoginBtn = new Button({
  props: {
    class: 'white',
    value: 'Уже зарегистрированы',
    href: '/sign-in',
    outline: true
  }
})
const registerBtn = new Button({
  props: {
    class: 'bg-primary white',
    value: 'Создать аккаунт',
    href: '/'
  }
})

const buttons = {
  redirectLoginBtnId: redirectLoginBtn.id,
  registerBtnId: registerBtn.id
}

export class RegisterPage extends Component {
  constructor(options: Omit<ComponentOptions, 'template'> = {}) {
    super({
      template,
      props: {
        form,
        loadingId: registerLoadingId,
        ...buttons,
        inputComponents: Object.values(inputComponents)
      },
      components: {
        ...inputComponents,
        redirectLoginBtn,
        registerBtn
      },
      ...options
    })
  }

  async mounted() {
    super.mounted()
    this.initValidation()

    const submitBtn = document.getElementById(registerBtn.id) as HTMLElement

    submitBtn.addEventListener('click', async (e) => {
      e.preventDefault()
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const anchor = e.target.closest('a')

      if (!anchor) return

      await this.submitRegisterForm(submitBtn)

      // window.location = anchor.getAttribute('href')
    })
  }

  initValidation() {

    const validator = new Validator({ form })

    validator.initValidation()
  }

  async submitRegisterForm(submitBtn: HTMLElement) {
    const loadingElement = document.getElementById(registerLoadingId) as HTMLElement
    const form = document.getElementById('register-form') as HTMLFormElement

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

    await signUp(model as SignUpData)
      .then((res) => console.log(res))
      .catch((e) => console.log(e))

    return new Promise((resolve) => {
      setTimeout(() => {

        form.reset()

        loading({ target: submitBtn, loadingElement, loading: false })
        console.log(model)

        resolve(true)
      }, 2000)
    })
  }
}
