import Block from '../../../../lib/dom/Block'
import template from './template.hbs'
import { withStore } from '../../../../lib/dom/Store'
import { Button } from '../../../../components/ui/button/index'
import { UserResponse } from '../../../auth/services/authApi'
import { Form } from '../../../../components/ui/form/index'
import Router from '../../../../lib/dom/Router'
import { ProfileRoutes } from '../../config/routes'
import { NavDrawer } from '../../../../components/nav/drawer/index'

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

class ProfileShowPageComponent extends Block<ProfileProps> {
  init() {
    this.children.navDrawer = new NavDrawer({ withHeaderMenu: true })

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
        click: () => Router.go(ProfileRoutes.edit)
      }
    })

    this.children.editPassword = new Button({
      label: 'Изменить пароль',
      class: 'bg-dark white',
      events: {
        click: () => Router.go(ProfileRoutes.editPassword)
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
    super.componentDidUpdate(_oldProps, newProps)

    const form = this.children.form as Form

    form.setProps({ ...newProps })

    return false
  }

  render() {
    return this.compile(template, this.props)
  }
}

const withUser = withStore((state) => ({ ...state.user }))

export const ProfileShowPage = withUser(ProfileShowPageComponent)
