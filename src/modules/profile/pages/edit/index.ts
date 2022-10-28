import '../style.css'
import template from './template.hbs'
import { Button } from '../../../../components/ui/button/index'
import { Input } from '../../../../components/ui/input/index'
import { UserResponse } from '../../../auth/services/authApi'
import Block from '../../../../lib/dom/Block'
import { Form } from '../../../../components/ui/form/index'
import Router from '../../../../lib/dom/Router'
import { ValidatedInput } from '../../../../components/ui/validated-input/index'
import { ProfileField } from '../../components/profile-field/index'
import { withStore } from '../../../../lib/dom/Store'
import { profileController } from '../../services/ProfileController'
import { ProfileEditRequest } from '../../services/api'

type ProfileProps = UserResponse

const formConfig = {
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
}

const userFields = [
  'id',
  'first_name',
  'second_name',
  'display_name',
  'login', 'avatar',
  'email',
  'phone'
] as Array<keyof ProfileProps>

class ProfileEditPageComponent extends Block<ProfileProps> {
  init() {
    const inputs = formConfig.inputs.map((formConfig) => {
      const propKey = Object.keys(this.props).find((propKey) => propKey === formConfig.name)

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const value = propKey ? this.props[propKey] : undefined

      return {
        ...formConfig,
        value
      }
    })

    this.children.form = new Form({
      inputs
    })

    this.children.save = new Button({
      label: 'Отправить',
      class: 'bg-dark white',
      events: {
        click: () => this.onSubmit()
      }
    })

    this.children.cancel = new Button({
      label: 'Отменить',
      class: 'bg-danger white',
      events: {
        click: () => this.onCancel()
      }
    })
  }

  async onSubmit() {
    const form = this.children.form as Form
    const validatedInputs = form.children.inputs as ValidatedInput[]

    const values = validatedInputs.map((validatedInput) => {
      const input = validatedInput.children.input as Input

      return [input.getName(), input.getValue()]
    })

    const data = Object.fromEntries(values)

    await profileController.edit(data as ProfileEditRequest)
  }

  onCancel() {
    Router.back()
  }

  protected componentDidUpdate(_oldProps: ProfileProps, newProps: ProfileProps): boolean {
    (this.children.form as ProfileField[]).forEach((field, i) => {
      field.setProps({  value: newProps[userFields[i]] })
    })

    return false
  }

  render() {
    return this.compile(template, this.props)
  }
}

const withUser = withStore((state) => ({ ...state.user }))

export const ProfileEditPage = withUser(ProfileEditPageComponent)
