import '../style.css'
import template from './template.hbs'
import { Button } from '../../../../components/ui/button'
import { Input } from '../../../../components/ui/input'
import Block from '../../../../lib/dom/Block'
import { Form } from '../../../../components/ui/form'
import { ValidatedInput } from '../../../../components/ui/validated-input'
import { profileController } from '../../services/ProfileController'
import { ProfileEditPasswordRequest } from '../../services/api'
import Router from '../../../../lib/dom/Router'
import { ProfileField } from '../../components/profile-field'
import { withStore } from '../../../../lib/dom/hocs/withStore'

const formConfig = {
  inputs: [{
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
] as Array<keyof ProfileEditPasswordRequest>

type ProfileProps = ProfileEditPasswordRequest

class ProfileEditPasswordPageComponent extends Block {
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

    await profileController.editPassword(data as ProfileEditPasswordRequest)
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

export const ProfileEditPasswordPage = withUser(ProfileEditPasswordPageComponent)
