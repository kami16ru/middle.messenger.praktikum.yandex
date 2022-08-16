import '../style.css'
import '../../../../components/nav/nav-drawer'
import template from './template.hbs'
import Component from '../../../../lib/dom/Component'
import ProfileAvatar from '../../components/profile-avatar'
import Button from '../../../../components/ui/button'
import Input from '../../../../components/ui/input'

const form = {
  email: { id: 'form-profile-email', name: 'email', label: 'Почта', value: 'example@example.com' },
  login: { id: 'form-profile-login', name: 'login', label: 'Логин', value: 'examplelogin' },
  first_name: { id: 'form-profile-first-name', name: 'first_name', label: 'Имя', value: 'Иван' },
  second_name: { id: 'form-profile-second-name', name: 'second_name', label: 'Фамилия', value: 'Иванов' },
  display_name: { id: 'form-profile-second-name', name: 'display_name', label: 'Имя в чате', value: 'superhero' },
  phone: { id: 'form-profile-phone', name: 'phone', label: 'Телефон', value: '89099999999' }
}

class ProfileEditPage extends Component {
  constructor(options) {
    super(options)
  }
}

export default new ProfileEditPage({
  template,
  props: {
    form,
    ProfileAvatar: ProfileAvatar.compile(),
    SaveBtn: Button.template({
      ...Button.props,
      class: 'bg-dark white',
      value: 'Сохранить',
      href: '/profile/show'
    }),
    ExitBtn: Button.template({
      ...Button.props,
      class: 'bg-danger white',
      value: 'Выйти',
      href: '/logout'
    }),
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
  },
  components: {
    ProfileAvatar,
    Button,
    Input
  },
  attrs: {
    class: 'profile-edit-page container full'
  }
})
