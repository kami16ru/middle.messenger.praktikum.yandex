import Block from '../../../../utils/Block'
import '../style.css'
import './style.css'
import template from './template.hbs'
import { Button } from '../../../../components/ui/button/index'
import { Input } from '../../../../components/ui/input/index'
import { authController } from '../../services/AuthController'
import { SignUpRequest } from '../../services/authApi'
import { Form } from '../../../../components/ui/form/index'
import { Link } from '../../../../components/ui/link/index'

const form = new Form({
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
  }]
})

export class RegisterPage extends Block {
  constructor() {
    super({})
  }

  init() {
    this.children.form = form

    this.children.button = new Button({
      label: 'Создать аккаунт',
      class: 'bg-primary white full-width',
      events: {
        click: () => this.onSubmit()
      }
    })

    this.children.link = new Link({
      label: 'Уже зарегистрированы',
      to: '/sign-in'
    })
  }

  async onSubmit() {
    const inputs = form.children.inputs as Input[]
    const values = inputs.map((child) => ([(child as Input).getName(), (child as Input).getValue()]))

    const data = Object.fromEntries(values)

    await authController.signUp(data as SignUpRequest)
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}
