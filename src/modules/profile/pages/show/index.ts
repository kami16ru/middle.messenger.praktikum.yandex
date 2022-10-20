import '../style.css'
import template from './template.hbs'
import Component, { getTemplatesFromComponents, createComponentsFromProps } from '../../../../lib/dom/Component'
import { ProfileAvatar } from '../../components/profile-avatar/index'
import { Button } from '../../../../components/ui/button/index'
import { Input } from '../../../../components/ui/input/index'
import { ComponentOptions } from '../../../../lib/dom/types'
import { FormConfig } from '../../../../components/ui/input/types'
import { ButtonConfig } from '../../../../components/ui/button/types'

const form: FormConfig[] = [
  { id: 'form-profile-email', name: 'email', label: 'Почта', readOnly: 'readonly', value: 'example@example.com' },
  { id: 'form-profile-login', name: 'login', label: 'Логин', readOnly: 'readonly', value: 'examplelogin' },
  { id: 'form-profile-first-name', name: 'first_name', label: 'Имя', readOnly: 'readonly', value: 'Иван' },
  { id: 'form-profile-second-name', name: 'second_name', label: 'Фамилия', readOnly: 'readonly', value: 'Иванов' },
  { id: 'form-profile-second-name', name: 'display_name', label: 'Имя в чате', readOnly: 'readonly', value: 'superhero' },
  { id: 'form-profile-phone', name: 'phone', label: 'Телефон', readOnly: 'readonly', value: '89099999999' }
]
const inputComponents = createComponentsFromProps(form, Input)
const inputTemplates = getTemplatesFromComponents(inputComponents)

const buttons: ButtonConfig[] = [
  { class: 'bg-dark white', value: 'Изменить данные', href: '/settings/edit' },
  { class: 'bg-dark white', value: 'Изменить пароль', href: '/settings/edit-password' },
  { class: 'bg-danger white', value: 'Выйти', href: '/logout' }
]
const buttonComponents = createComponentsFromProps(buttons, Button)
const buttonTemplates = getTemplatesFromComponents(buttonComponents)

const profileAvatar = new ProfileAvatar()

export class ShowProfilePage extends Component {
  constructor(options: Omit<ComponentOptions, 'template'> = {}) {
    super({
      template,
      ...options,
      props: {
        ...options.props,
        form,
        profileAvatarId: profileAvatar.id,
        buttonTemplates,
        inputTemplates
      },
      components: {
        profileAvatar
      },
      attrs: {
        class: 'profile-show-page container full'
      }
    })
  }
}
