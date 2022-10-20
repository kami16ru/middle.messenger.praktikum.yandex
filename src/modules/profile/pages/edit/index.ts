import '../style.css'
import template from './template.hbs'
import Component, { createComponentsFromProps, getTemplatesFromComponents } from '../../../../lib/dom/Component'
import { ProfileAvatar } from '../../components/profile-avatar/index'
import { Button } from '../../../../components/ui/button/index'
import { Input } from '../../../../components/ui/input/index'
import Validator from '../../../../lib/validation/Validator'
import { ComponentOptions } from '../../../../lib/dom/types'
import { FormConfig } from '../../../../components/ui/input/types'
import { ButtonConfig } from '../../../../components/ui/button/types'

const form: FormConfig[] = [
  { id: 'form-profile-email', name: 'email', label: 'Почта', value: 'example@example.com', rules: ['isEmail'] },
  { id: 'form-profile-login', name: 'login', label: 'Логин', value: 'examplelogin', rules: ['isLogin'] },
  { id: 'form-profile-first-name', name: 'first_name', label: 'Имя', value: 'Иван', rules: ['isName'] },
  { id: 'form-profile-second-name', name: 'second_name', label: 'Фамилия', value: 'Иванов', rules: ['isName'] },
  { id: 'form-profile-second-name', name: 'display_name', label: 'Имя в чате', value: 'superhero' },
  { id: 'form-profile-phone', name: 'phone', label: 'Телефон', value: '89099999999', rules: ['isPhone'] }
]
const inputComponents = createComponentsFromProps(form, Input)
const inputTemplates = getTemplatesFromComponents(inputComponents)

const buttons: ButtonConfig[] = [
  { class: 'bg-dark white', value: 'Сохранить', href: '/settings' },
  { class: 'bg-danger white', value: 'Отменить', href: '/settings' }
]
const buttonComponents = createComponentsFromProps(buttons, Button)
const buttonTemplates = getTemplatesFromComponents(buttonComponents)

const profileAvatar = new ProfileAvatar()

export class EditProfilePage extends Component {
  constructor(options: Omit<ComponentOptions, 'template'> = {}) {
    super({
      template,
      ...options,
      props: {
        ...options.props,
        form,
        profileAvatarId: profileAvatar.id,
        ...buttons,
        inputTemplates,
        buttonTemplates
      },
      components: {
        profileAvatar
      },
      attrs: {
        class: 'profile-edit-page container full'
      }
    })
  }

  mounted() {
    super.mounted()
    this.initValidation()
  }

  initValidation() {
    const validator = new Validator({ form })

    validator.initValidation()
  }
}
