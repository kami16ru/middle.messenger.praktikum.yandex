import template from './template.hbs'
import './style.css'
import Component, { createComponentsFromProps } from '../../../../lib/dom/Component'
import { Button } from '../../../../components/ui/button/index'
import { loading } from '../../../../lib/helpers/components'
import { Input } from '../../../../components/ui/input/index'
import Validator from '../../../../lib/validation/Validator'
import { ComponentOptions } from '../../../../lib/dom/types'
import { FormConfig } from '../../../../components/ui/input/types'

const loginLoadingId = 'login-submit-loading'

const form: FormConfig[] = [
  { id: 'form-login-email', name: 'email', label: 'Email', helper: 'Email пользователя', rules: ['isEmail'], value: '' },
  { id: 'form-login-password', name: 'password', label: 'Пароль', helper: '', type: 'password', rules: ['isPassword'], value: '' }
]
const inputComponents = createComponentsFromProps(form, Input)

const loginBtn = new Button({
  props: {
    class: 'bg-primary white',
    value: 'Войти',
    href: '/'
  }
})
const registerBtn = new Button({
  props: {
    class: 'white',
    value: 'Регистрация',
    href: '/register',
    outline: true
  }
})
const buttons = {
  loginBtnId: loginBtn.id,
  registerBtnId: registerBtn.id
}

export class LoginPage extends Component {
  constructor(options: Omit<ComponentOptions, 'template'> = {}) {
    super({
      template,
      props: {
        loadingId: loginLoadingId,
        form,
        ...buttons,
        inputComponents: Object.values(inputComponents)
      },
      components: {
        loginBtn,
        registerBtn,
        ...inputComponents
      },
      ...options
    })
  }

  async mounted() {
    super.mounted()
    this.initValidation()

    const submitBtn = document.getElementById(loginBtn.id)

    if (submitBtn) {
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
  }

  initValidation() {
    const form = Object.values(inputComponents).map((component) => ({
      id: component.id,
      name: component?.props?.name as string,
      label: component?.props?.label as string,
      helper: component?.props?.helper as string,
      rules: component?.props?.rules as string[],
      value: component?.props?.value as string
    }))

    console.log(form)

    const validator = new Validator({ form })

    validator.initValidation()
  }

  async submitLoginForm(submitBtn: HTMLElement) {
    const loadingElement = document.getElementById(loginLoadingId) as HTMLElement
    const form = document.getElementById('login-form') as HTMLFormElement

    const formData = new FormData(form)
    const email = formData.get('email')
    const password = formData.get('password')

    const credentials = {
      email,
      password
    }

    loading({ target: submitBtn, loadingElement, loading: true })

    return new Promise((resolve) => {
      setTimeout(() => {

        form.reset()

        loading({ target: submitBtn, loadingElement, loading: false })
        console.log(credentials)

        resolve(true)
      }, 2000)
    })
  }
}
