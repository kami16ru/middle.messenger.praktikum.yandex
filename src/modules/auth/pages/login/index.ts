import Block from '../../../../lib/dom/Block'
import template from './template.hbs'
import { Input } from '../../../../components/ui/input'
import styles from '../styles.module.pcss'
import { SignInRequest } from '../../services/authApi'
import { authController } from '../../services/AuthController'
import { Form } from '../../../../components/ui/form'

export class LoginPage extends Block {
  constructor() {
    super({})
  }

  init() {
    this.children.form = new Form({
      title: 'Вход в систему',
      width: '400px',
      inputs: [{
        name: 'login',
        type: 'text',
        label: 'Логин',
        helper: '',
        rules: ['isLogin']
      }, {
        name: 'password',
        type: 'password',
        label: 'Пароль',
        helper: '',
        rules: ['isPassword']
      }],
      actions: [{
        type: 'submit',
        label: 'Войти',
        class: 'bg-primary white full-width'
      }],
      link: {
        label: 'Регистрация',
        to: '/register'
      },
      events: {
        submit: async (e: SubmitEvent) => {
          e.preventDefault()

          await this.onSubmit()

          return false
        }
      }
    })

    // this.children.button = new Button({
    //   label: 'Войти',
    //   class: 'bg-primary white full-width',
    //   events: {
    //     click: () => this.onSubmit()
    //   }
    // })

    // this.children.link = new Link({
    //   label: 'Регистрация',
    //   to: '/register'
    // })
  }

  async onSubmit() {
    const form = this.children.form as Form
    const validatedInputs = form.children.inputs as Input[]
    const inputs = validatedInputs.map((input: Input) => input.children.input) as Input[]
    const values = inputs.map((child) => ([(child as Input).getName(), (child as Input).getValue()]))

    const data = Object.fromEntries(values)

    await authController.signIn(data as SignInRequest)
  }

  render() {
    return this.compile(template, { ...this.props, styles })
  }
}
