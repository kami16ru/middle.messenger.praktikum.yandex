export default [{
  name: 'isEmail',
  message: 'Не правильный формат email',
  check: (value) => value
    .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
}, {
  name: 'isPassword',
  message: 'Хотя бы одна заглавная буква, цифра, минимум 8 символов, максимум 40',
  check: (value) => /[A-Z]/.test(value) && /[0-9]/.test(value) && value.length >= 8 && value.length < 40
}]
