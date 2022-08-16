import '../style.css'
import template from './template.hbs'
import Component from '../../../../lib/dom/Component'
import Button from '../../../../components/ui/button'
import Input from '../../../../components/ui/input'
import Validator from '../../../../lib/validation/Validator'

const form = {
  old_password: { id: 'form-edit-password-old_password', name: 'old_password', label: 'Старый пароль', value: '', type: 'password', rules: ['isPassword'] },
  new_password: { id: 'form-edit-password-new_password', name: 'new_password', label: 'Новый пароль', value: '', type: 'password', rules: ['isPassword'] },
  passwordConfirm: { id: 'form-edit-password-retype_new_password', name: 'retype_new_password', label: 'Повторите новый пароль', value: '', type: 'password', rules: ['isPassword'] }
}
const inputs = {
  InputOldPassword: Input.template({
    ...Input.props,
    input: form.old_password
  }),
  InputNewPassword: Input.template({
    ...Input.props,
    input: form.new_password
  }),
  InputPasswordConfirm: Input.template({
    ...Input.props,
    input: form.passwordConfirm
  })
}

class EditPwdPage extends Component {
  constructor(options) {
    super(options)
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

export default new EditPwdPage({
  template,
  props: {
    form,
    SaveBtn: Button.template({
      ...Button.props,
      class: 'bg-dark white',
      value: 'Сохранить',
      href: '/profile/show'
    }),
    ...inputs
  },
  components: {
    Button,
    Input
  },
  attrs: {
    class: 'profile-edit-password-page container full'
  }
})
