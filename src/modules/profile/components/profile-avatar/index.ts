import './style.css'
import template from './template.hbs'
import Component from '../../../../lib/dom/Component'
import { ComponentOptions } from '../../../../lib/dom/types'

export class ProfileAvatar extends Component {
  constructor(options: ComponentOptions = {}) {
    super({
      template,
      ...options
    })
  }

  mounted() {
    super.mounted()

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    import('../../../../assets/css/dialog')

    const avatar = document.querySelector('.profile-avatar') as HTMLElement
    const avatarChange = document.querySelector('.profile-avatar__change') as HTMLElement

    function showEditImg() {
      avatar.setAttribute('hidden', 'true')
      avatarChange.removeAttribute('hidden')
    }

    function hideEditImg() {
      avatarChange.setAttribute('hidden', 'true')
      avatar.removeAttribute('hidden')
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    avatar.onmouseenter = () => setTimeout(showEditImg, 250)

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    avatar.onmouseout = () => setTimeout(hideEditImg, 500)
  }
}
