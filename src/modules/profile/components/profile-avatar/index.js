import './style.css'
import template from './template.hbs'
import Component from '../../../../lib/dom/Component'

class ProfileAvatar extends Component {
  constructor(options) {
    super(options)
  }

  async mounted() {
    import('../../../../assets/css/dialog')
    console.log('Profile avatar component mounted')

    const avatar = document.querySelector('.profile-avatar')
    const avatarChange = document.querySelector('.profile-avatar__change')

    function showEditImg() {
      avatar.setAttribute('hidden', 'true')
      avatarChange.removeAttribute('hidden')
    }

    function hideEditImg() {
      avatarChange.setAttribute('hidden', 'true')
      avatar.removeAttribute('hidden')
    }

    avatar.onmouseenter = () => setTimeout(showEditImg, 250)

    avatar.onmouseout = () => setTimeout(hideEditImg, 500)
  }
}

export default new ProfileAvatar({
  template
})
