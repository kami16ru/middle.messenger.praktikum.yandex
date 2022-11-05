import '../style.css'
import template from './template.hbs'
import { Input } from '../../../../components/ui/input'
import { UserResponse } from '../../../auth/services/authApi'
import Block from '../../../../lib/dom/Block'
import { Form } from '../../../../components/ui/form'
import Router from '../../../../lib/dom/Router'
import { ValidatedInput } from '../../../../components/ui/validated-input'
import { withStore } from '../../../../lib/dom/hocs/withStore'
import { profileController } from '../../services/ProfileController'
import { ProfileEditRequest } from '../../services/api'

type ProfileProps = UserResponse

const formInputs = [{
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
  name: 'display_name',
  type: 'text',
  label: 'Никнейм',
  rules: ['isName']
}, {
  name: 'phone',
  type: 'text',
  label: 'Телефон',
  helper: 'От 10 до 15 символов, состоит из цифр, может начинается с плюса',
  rules: ['isPhone']
}]

class ProfileEditPageComponent extends Block<ProfileProps> {
  init() {
    const formConfig = {
      inputs: formInputs
    }
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
      title: 'Профайл - редактирование',
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

    await profileController.edit(data as ProfileEditRequest)
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

export const ProfileEditPage = withUser(ProfileEditPageComponent)
