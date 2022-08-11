const avatar = document.getElementById('avatar')
const avatarChange = document.getElementById('avatar-change')

function showEditImg() {
  avatar.setAttribute('hidden', 'true')
  avatarChange.removeAttribute('hidden')
}

function hideEditImg() {
  avatarChange.setAttribute('hidden', 'true')
  avatar.removeAttribute('hidden')
}

avatar.onmouseenter = () => showEditImg()

avatar.onmouseout = () => hideEditImg()

function logout() {
  window.location.href = '/'
}
