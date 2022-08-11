import '../style.css'
import '../../../components/input'
import '../../../components/button'
import template from './template.hbs'
import nav from '../../../config/nav'
import icons from '../../../config/icons'
import Component from '../../../lib/dom/Component'

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

    import('../mounted')
    import('../../../assets/css/dialog')
  }
}

export default new EditPwdPage({
  template,
  props: {
    form,
    navList: nav.drawer,
    toggleIcon: icons.toggleNav
  }
})
