import '../style.css'
import template from './template.hbs'
import Component from '../../../../lib/dom/Component'
import { Button } from '../../../../components/ui/button/index'
import { Input } from '../../../../components/ui/input/index'
import Validator from '../../../../lib/validation/Validator'
import { ComponentOptions } from '../../../../lib/dom/types'

const form = {
  old_password: { id: 'form-edit-password-old_password', name: 'old_password', label: 'Старый пароль', value: '', type: 'password', rules: ['isPassword'] },
  new_password: { id: 'form-edit-password-new_password', name: 'new_password', label: 'Новый пароль', value: '', type: 'password', rules: ['isPassword'] },
  passwordConfirm: { id: 'form-edit-password-retype_new_password', name: 'retype_new_password', label: 'Повторите новый пароль', value: '', type: 'password', rules: ['isPassword'] }
}

const inputOldPassword = new Input({
  props: {
    input: form.old_password
  }
})
const inputNewPassword = new Input({
  props: {
    input: form.new_password
  }
})
const inputPasswordConfirm = new Input({
  props: {
    input: form.passwordConfirm
  }
})
const inputs = {
  InputOldPassword: inputOldPassword.compile(),
  InputNewPassword: inputNewPassword.compile(),
  InputPasswordConfirm: inputPasswordConfirm.compile()
}

const saveBtn = new Button({
  props: {
    class: 'bg-dark white',
    value: 'Сохранить',
    href: '/profile/show'
  }
})

export class EditPwdPage extends Component {
  constructor(options: Omit<ComponentOptions, 'template'>) {
    super({
      template,
      props: {
        form,
        SaveBtn: saveBtn.compile(),
        ...inputs
      },
      components: {
        saveBtn,
        inputOldPassword,
        inputNewPassword,
        inputPasswordConfirm
      },
      attrs: {
        class: 'profile-edit-password-page container full'
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
