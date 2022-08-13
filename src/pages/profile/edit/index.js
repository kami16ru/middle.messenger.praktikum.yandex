import '../style.css'
import '../../../components/input'
import '../../../components/button'
import '../../../components/nav/nav-drawer'
import template from './template.hbs'
import Component from '../../../lib/dom/Component'
import ProfileAvatar from '../../../modules/profile/components/profile-avatar'

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

  async mounted() {
    console.log('Profile edit page mounted')
  }
}

export default new ProfileEditPage({
  template,
  props: {
    form,
    ProfileAvatar: ProfileAvatar.compile()
  },
  components: {
    ProfileAvatar
  }
})
