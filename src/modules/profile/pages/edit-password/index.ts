import '../style.css'
import template from './template.hbs'
import { Input } from '../../../../components/ui/input'
import Block from '../../../../lib/dom/Block'
import { Form } from '../../../../components/ui/form'
import { ValidatedInput } from '../../../../components/ui/validated-input'
import { profileController } from '../../services/ProfileController'
import { ProfileEditPasswordRequest } from '../../services/api'
import Router from '../../../../lib/dom/Router'
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
      title: 'Изменение пароля',
      inputs,
      actions: [{
        label: 'Отправить',
        class: 'bg-dark white',
        type: 'submit'
      }, {
        label: 'Отменить',
        class: 'bg-danger white',
        events: {
          click: () => this.onCancel()
        }
      }],
      events: {
        submit: async (e: SubmitEvent) => {
          e.preventDefault()

          await this.onSubmit()

          return false
        }
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

export const ProfileEditPasswordPage = withUser(ProfileEditPasswordPageComponent)
