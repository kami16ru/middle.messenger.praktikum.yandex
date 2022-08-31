import '../style.css'
import template from './template.hbs'
import Component from '../../../../lib/dom/Component'
import { ProfileAvatar } from '../../components/profile-avatar/index'
import Button from '../../../../components/ui/button/index'
import Input from '../../../../components/ui/input/index'
import Validator from '../../../../lib/validation/Validator'
import { ComponentOptions } from '../../../../lib/dom/types'

const form = {
  email: { id: 'form-profile-email', name: 'email', label: 'Почта', value: 'example@example.com', rules: ['isEmail'] },
  login: { id: 'form-profile-login', name: 'login', label: 'Логин', value: 'examplelogin', rules: ['isLogin'] },
  first_name: { id: 'form-profile-first-name', name: 'first_name', label: 'Имя', value: 'Иван', rules: ['isName'] },
  second_name: { id: 'form-profile-second-name', name: 'second_name', label: 'Фамилия', value: 'Иванов', rules: ['isName'] },
  display_name: { id: 'form-profile-second-name', name: 'display_name', label: 'Имя в чате', value: 'superhero' },
  phone: { id: 'form-profile-phone', name: 'phone', label: 'Телефон', value: '89099999999', rules: ['isPhone'] }
}
const buttons = {
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

export class EditProfilePage extends Component {
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
        class: 'profile-edit-page container full'
      },
      ...options
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
