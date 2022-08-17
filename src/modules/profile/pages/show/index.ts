import '../style.css'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import template from './template.hbs'
import Component from '../../../../lib/dom/Component'
import ProfileAvatar from '../../components/profile-avatar/index'
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

class ProfileShowPage extends Component {
  constructor(options: ComponentOptions) {
    super(options)
  }
}

export default new ProfileShowPage({
  template,
  props: {
    form,
    ProfileAvatar: ProfileAvatar.compile(),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    EditProfileBtn: Button.template({
      ...Button.props,
      class: 'bg-dark white',
      value: 'Изменить данные',
      href: '/profile/edit'
    }),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    EditPasswordBtn: Button.template({
      ...Button.props,
      class: 'bg-dark white',
      value: 'Изменить пароль',
      href: '/profile/edit-password'
    }),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ExitBtn: Button.template({
      ...Button.props,
      class: 'bg-danger white',
      value: 'Выйти',
      href: '/logout'
    }),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    InputEmail: Input.template({
      ...Input.props,
      input: form.email
    }),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    InputLogin: Input.template({
      ...Input.props,
      input: form.login
    }),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    InputFirstName: Input.template({
      ...Input.props,
      input: form.first_name
    }),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    InputSecondName: Input.template({
      ...Input.props,
      input: form.second_name
    }),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    InputDisplayName: Input.template({
      ...Input.props,
      input: form.display_name
    }),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    InputPhone: Input.template({
      ...Input.props,
      input: form.phone
    })
  },
  components: {
    ProfileAvatar,
    Button,
    Input
  },
  attrs: {
    class: 'profile-show-page container full'
  }
})
