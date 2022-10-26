import Block from '../../../../utils/Block'
import template from './template.hbs'
import { withStore } from '../../../../utils/Store'
import { authController as AuthController } from '../../../../modules/auth/services/AuthController'
import { Button } from '../../../../components/ui/button/index'
import { UserResponse } from '../../../auth/services/authApi'
import { ProfileField } from '../../components/profile-field/index'

type ProfileProps = UserResponse

const userFields = [
  'id',
  'first_name',
  'second_name',
  'display_name',
  'login', 'avatar',
  'email',
  'phone'
] as Array<keyof ProfileProps>

class ProfilePageBase extends Block<ProfileProps> {
  init() {
    this.children.fields = userFields.map((name) => {
      return new ProfileField({ name, value: this.props[name] })
    })

    this.children.logoutButton = new Button({
      label: 'Выйти',
      events: {
        click: async () => {
          await AuthController.logout()
        }
      }
    })
  }

  protected componentDidUpdate(_oldProps: ProfileProps, newProps: ProfileProps): boolean {
    (this.children.fields as ProfileField[]).forEach((field, i) => {
      field.setProps({  value: newProps[userFields[i]] })
    })

    return false
  }

  render() {
    return this.compile(template, this.props)
  }
}

const withUser = withStore((state) => ({ ...state.user }))

export const ProfilePage = withUser(ProfilePageBase)
