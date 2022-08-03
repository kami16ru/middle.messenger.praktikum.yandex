import '../style.css'
import '../../../components/input'
import '../../../components/button'
import '../../../components/nav/nav-drawer'
import ProfileShowPage from './template.hbs'
import nav from '../../../config/nav'
import icons from '../../../config/icons'

const form = {
    email: { id: 'form-profile-email', name: 'email', label: 'Почта', readOnly: 'readonly', value: 'example@example.com' },
    login: { id: 'form-profile-login', name: 'login', label: 'Логин', readOnly: 'readonly', value: 'examplelogin' },
    first_name: { id: 'form-profile-first-name', name: 'first_name', label: 'Имя', readOnly: 'readonly', value: 'Иван' },
    second_name: { id: 'form-profile-second-name', name: 'second_name', label: 'Фамилия', readOnly: 'readonly', value: 'Иванов' },
    display_name: { id: 'form-profile-second-name', name: 'display_name', label: 'Имя в чате', readOnly: 'readonly', value: 'superhero' },
    phone: { id: 'form-profile-phone', name: 'phone', label: 'Телефон', readOnly: 'readonly', value: '89099999999' },
}

export default {
    template: ProfileShowPage,
    props: {
        form,
        navList: nav.drawer,
        toggleIcon: icons.toggleNav
    },
    mounted: () => import('./mounted')
}