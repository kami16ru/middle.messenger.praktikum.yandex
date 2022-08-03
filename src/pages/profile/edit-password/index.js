import '../style.css'
import '../../../components/input'
import '../../../components/button'
import EditPasswordPage from './template.hbs'
import nav from '../../../config/nav'
import icons from '../../../config/icons'

const form = {
    old_password: { id: 'form-edit-password-old_password', name: 'old_password', label: 'Старый пароль', value: '12345678', type: 'password' },
    new_password: { id: 'form-edit-password-new_password', name: 'new_password', label: 'Новый пароль', value: '12345678', type: 'password' },
    retype_new_password: { id: 'form-edit-password-retype_new_password', name: 'retype_new_password', label: 'Повторите новый пароль', value: '12345678', type: 'password' },
}

export default {
    template: EditPasswordPage,
    props: {
        form,
        navList: nav.drawer,
        toggleIcon: icons.toggleNav
    },
    mounted: () => import('./mounted')
}