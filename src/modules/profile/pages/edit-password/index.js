import '../style.css'
import '../../../../components/input'
import template from './template.hbs'
import Component from '../../../../lib/dom/Component'
import Button from '../../../../components/ui/button'

const form = {
  old_password: { id: 'form-edit-password-old_password', name: 'old_password', label: 'Старый пароль', value: '12345678', type: 'password' },
  new_password: { id: 'form-edit-password-new_password', name: 'new_password', label: 'Новый пароль', value: '12345678', type: 'password' },
  retype_new_password: { id: 'form-edit-password-retype_new_password', name: 'retype_new_password', label: 'Повторите новый пароль', value: '12345678', type: 'password' },
}

class EditPwdPage extends Component {
  constructor(options) {
    super(options)
  }

  async mounted() {
    console.log('Edit password page mounted')
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
    })
  },
  components: {
    Button
  },
  attrs: {
    class: 'profile-edit-password-page container full'
  }
})
