import Handlebars from '../../plugins/handlebars'
import LoginPage from './template.hbs'
import './style.css'
import '../../components/input'
import '../../components/button'
import loadingImg from "../../assets/images/loading.gif";

Handlebars.registerPartial('LoginPage', LoginPage);

const loginBtnId = 'login-submit'
const registerBtnId = 'login-new-user'
const loginLoadingId = 'login-submit-loading'
const form = {
    email: { id: 'form-login-email', name: 'email', label: 'Email', helper: 'Email пользователя' },
    password: { id: 'form-login-password', name: 'password', label: 'Пароль', helper: '' }
}

export default {
    template: LoginPage,
    props: {
        href: '/register',
        value: 'Нет аккаунта?',
        buttonId: loginBtnId,
        registerBtnId,
        loginBtnId,
        loading: {
            id: loginLoadingId,
            imgSrc: loadingImg
        },
        form
    },
    mounted: () => import('./mounted')
}