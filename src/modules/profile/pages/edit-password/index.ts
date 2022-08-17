import '../style.css'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import template from './template.hbs'
import Component from '../../../../lib/dom/Component'
import Button from '../../../../components/ui/button/index'
import Input from '../../../../components/ui/input/index'
import Validator from '../../../../lib/validation/Validator'
import { ComponentOptions } from '../../../../lib/dom/types'

const form = {
  old_password: { id: 'form-edit-password-old_password', name: 'old_password', label: 'Старый пароль', value: '', type: 'password', rules: ['isPassword'] },
  new_password: { id: 'form-edit-password-new_password', name: 'new_password', label: 'Новый пароль', value: '', type: 'password', rules: ['isPassword'] },
  passwordConfirm: { id: 'form-edit-password-retype_new_password', name: 'retype_new_password', label: 'Повторите новый пароль', value: '', type: 'password', rules: ['isPassword'] }
}
const inputs = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  InputOldPassword: Input.template({
    ...Input.props,
    input: form.old_password
  }),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  InputNewPassword: Input.template({
    ...Input.props,
    input: form.new_password
  }),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  InputPasswordConfirm: Input.template({
    ...Input.props,
    input: form.passwordConfirm
  })
}

class EditPwdPage extends Component {
  constructor(options: ComponentOptions) {
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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
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
