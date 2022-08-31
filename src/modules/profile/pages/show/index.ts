import '../style.css'
import template from './template.hbs'
import Component from '../../../../lib/dom/Component'
import { ProfileAvatar } from '../../components/profile-avatar/index'
import Button from '../../../../components/ui/button/index'
import Input from '../../../../components/ui/input/index'
import { ComponentOptions } from '../../../../lib/dom/types'

const form = {
  email: { id: 'form-profile-email', name: 'email', label: 'Почта', readOnly: 'readonly', value: 'example@example.com' },
  login: { id: 'form-profile-login', name: 'login', label: 'Логин', readOnly: 'readonly', value: 'examplelogin' },
  first_name: { id: 'form-profile-first-name', name: 'first_name', label: 'Имя', readOnly: 'readonly', value: 'Иван' },
  second_name: { id: 'form-profile-second-name', name: 'second_name', label: 'Фамилия', readOnly: 'readonly', value: 'Иванов' },
  display_name: { id: 'form-profile-second-name', name: 'display_name', label: 'Имя в чате', readOnly: 'readonly', value: 'superhero' },
  phone: { id: 'form-profile-phone', name: 'phone', label: 'Телефон', readOnly: 'readonly', value: '89099999999' }
}

const buttons = {
  EditProfileBtn: Button.template({
    ...Button.props,
    class: 'bg-dark white',
    value: 'Изменить данные',
    href: '/profile/edit'
  }),
  EditPasswordBtn: Button.template({
    ...Button.props,
    class: 'bg-dark white',
    value: 'Изменить пароль',
    href: '/profile/edit-password'
  }),
  ExitBtn: Button.template({
    ...Button.props,
    class: 'bg-danger white',
    value: 'Выйти',
    href: '/logout'
  })
}

const inputs = {
  InputEmail: Input.template({
    ...Input.props,
    input: form.email
  }),
  InputLogin: Input.template({
    ...Input.props,
    input: form.login
  }),
  InputFirstName: Input.template({
    ...Input.props,
    input: form.first_name
  }),
  InputSecondName: Input.template({
    ...Input.props,
    input: form.second_name
  }),
  InputDisplayName: Input.template({
    ...Input.props,
    input: form.display_name
  }),
  InputPhone: Input.template({
    ...Input.props,
    input: form.phone
  })
}

const profileAvatar = new ProfileAvatar()

export class ShowProfilePage extends Component {
  constructor(options: ComponentOptions = {}) {
    super({
      template,
      props: {
        form,
        ProfileAvatar: profileAvatar.compile(),
        ...buttons,
        ...inputs
      },
      components: {
        profileAvatar,
        Button,
        Input
      },
      attrs: {
        class: 'profile-show-page container full'
      },
      ...options
    })
  }
}
