import { loading } from '../../lib/helpers/components'

const registerBtnId = 'register-submit'
const goHomeBtnId = 'register-go-home'
const registerLoadingId = 'register-submit-loading'

const submitBtn = document.getElementById(registerBtnId)

submitBtn.addEventListener('click', async (e) => {
  e.preventDefault()

  await submitRegisterForm()
})

function submitRegisterForm() {
  const loadingElement = document.getElementById(registerLoadingId)
  const form = document.getElementById('register-form')

  const formData = new FormData(form)
  const email = formData.get('email')
  const login = formData.get('login')
  const first_name = formData.get('first_name')
  const second_name = formData.get('second_name')
  const phone = formData.get('phone')
  const password = formData.get('password')

  const model = {
    email,
    login,
    first_name,
    second_name,
    phone,
    password,
  }

  loading({ target: submitBtn, loadingElement, loading: true })

  setTimeout(() => {
    form.reset()

    loading({ target: submitBtn, loadingElement, loading: false })
    console.log(model)
  }, 2000)
}