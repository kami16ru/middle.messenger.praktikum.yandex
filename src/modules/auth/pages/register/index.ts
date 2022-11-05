import Block from '../../../../lib/dom/Block'
import './style.css'
import template from './template.hbs'
import { Input } from '../../../../components/ui/input'
import { authController } from '../../services/AuthController'
import { SignUpRequest } from '../../services/authApi'
import { Form } from '../../../../components/ui/form'

export class RegisterPage extends Block {
  constructor() {
    super({})
  }

  init() {
    this.children.form = new Form({
      title: 'Регистрация',
      inputs: [{
        name: 'email',
        type: 'email',
        label: 'Почта',
        helper: 'Email пользователя',
        rules: ['isEmail']
      }, {
        name: 'login',
        type: 'text',
        label: 'Логин',
        rules: ['isLogin']
      }, {
        name: 'first_name',
        type: 'text',
        label: 'Имя',
        helper: 'Как вас зовут?',
        rules: ['isName']
      }, {
        name: 'second_name',
        type: 'text',
        label: 'Фамилия',
        rules: ['isName']
      }, {
        name: 'phone',
        type: 'text',
        label: 'Телефон',
        helper: 'От 10 до 15 символов, состоит из цифр, может начинается с плюса',
        rules: ['isPhone']
      }, {
        name: 'password',
        type: 'password',
        label: 'Пароль',
        helper: 'Хотя бы одна заглавная буква, цифра, минимум 8 символов, максимум 40',
        rules: ['isPassword']
      }, {
        name: 'passwordConfirm',
        type: 'password',
        label: 'Пароль еще раз',
        helper: 'Должны совпадать',
        rules: ['isPassword']
      }],
      actions: [{
        type: 'submit',
        label: 'Создать аккаунт',
        class: 'bg-primary white full-width'
      }],
      link: {
        label: 'Уже зарегистрированы',
        to: '/sign-in'
      },
      events: {
        submit: async () => {
          await this.onSubmit()

          return false
        }
      }
    })
  }

  async onSubmit() {
    const form = this.children.form as Form
    const inputs = form.children.inputs as Input[]
    const values = inputs.map((child) => ([(child as Input).getName(), (child as Input).getValue()]))

    const data = Object.fromEntries(values)

    await authController.signUp(data as SignUpRequest)
  }

  render() {
    return this.compile(template, this.props)
  }
}
