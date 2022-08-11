import { loading } from '../../lib/helpers/components'

console.log('render login page')

const loginBtnId = 'login-submit'
const registerBtnId = 'login-new-user'
const loginLoadingId = 'login-submit-loading'

const submitBtn = document.getElementById(loginBtnId)

submitBtn.addEventListener('click', async (e) => {
  e.preventDefault()

  console.log('btn clicked')

  await submitLoginForm()
})

function submitLoginForm() {
  const loadingElement = document.getElementById(loginLoadingId)
  const form = document.getElementById('login-form')

  const formData = new FormData(form)
  const email = formData.get('email')
  const password = formData.get('password')

  const credentials = {
    email,
    password,
  }

  loading({ target: submitBtn, loadingElement, loading: true })

  setTimeout(() => {
    form.reset()

    loading({ target: submitBtn, loadingElement, loading: false })
    console.log(credentials)
  }, 2000)
}