import '../style.css'
import template from './template.hbs'
import Component from '../../../../lib/dom/Component'
import { ProfileAvatar } from '../../components/profile-avatar/index'
import { Button } from '../../../../components/ui/button/index'
import { Input } from '../../../../components/ui/input/index'
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
const saveBtn = new Button({
  props: {
    class: 'bg-dark white',
    value: 'Сохранить',
    href: '/settings'
  }
})
const exitBtn = new Button({
  props: {
    class: 'bg-danger white',
    value: 'Отменить',
    href: '/settings'
  }
})
const buttons = {
  SaveBtn: saveBtn.compile(),
  ExitBtn: exitBtn.compile()
}

const inputEmail = new Input({
  props: {
    input: form.email
  }
})
const inputLogin = new Input({
  props: {
    input: form.login
  }
})
const inputFirstName = new Input({
  props: {
    input: form.first_name
  }
})
const inputSecondName = new Input({
  props: {
    input: form.second_name
  }
})
const inputDisplayName = new Input({
  props: {
    input: form.display_name
  }
})
const inputPhone = new Input({
  props: {
    input: form.phone
  }
})
const inputs = {
  InputEmail: inputEmail.compile(),
  InputLogin: inputLogin.compile(),
  InputFirstName: inputFirstName.compile(),
  InputSecondName: inputSecondName.compile(),
  InputDisplayName: inputDisplayName.compile(),
  InputPhone: inputPhone.compile()
}

const profileAvatar = new ProfileAvatar()

export class EditProfilePage extends Component {
  constructor(options: Omit<ComponentOptions, 'template'> = {}) {
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
        saveBtn,
        exitBtn,
        inputEmail,
        inputLogin,
        inputFirstName,
        inputSecondName,
        inputDisplayName,
        inputPhone
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
