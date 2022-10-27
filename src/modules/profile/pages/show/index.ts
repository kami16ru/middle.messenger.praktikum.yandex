import Block from '../../../../utils/Block'
import template from './template.hbs'
import { withStore } from '../../../../utils/Store'
import { Button } from '../../../../components/ui/button/index'
import { UserResponse } from '../../../auth/services/authApi'
import { ProfileField } from '../../components/profile-field/index'
import { Form } from '../../../../components/ui/form/index'
import Router from '../../../../utils/Router'
import { Routes } from '../../../../main'

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

class ProfileShowPageComponent extends Block<ProfileProps> {
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
      inputs,
      readonly: true
    })

    this.children.editProfile = new Button({
      label: 'Изменить данные',
      class: 'bg-dark white',
      events: {
        click: () => Router.go(Routes.ProfileEdit)
      }
    })

    this.children.editPassword = new Button({
      label: 'Изменить пароль',
      class: 'bg-dark white',
      events: {
        click: () => Router.go(Routes.ProfileEditPassword)
      }
    })

    this.children.exit = new Button({
      label: 'Назад',
      class: 'bg-danger white',
      events: {
        click: () => Router.back()
      }
    })
  }

  protected componentDidUpdate(_oldProps: ProfileProps, newProps: ProfileProps): boolean {
    (this.children.fields as ProfileField[]).forEach((field, i) => {
      field.setProps({  value: newProps[userFields[i]] })
    })

    return false
  }

  render() {
    return this.compile(template, this.props)
  }
}

const withUser = withStore((state) => ({ ...state.user }))

export const ProfileShowPage = withUser(ProfileShowPageComponent)
