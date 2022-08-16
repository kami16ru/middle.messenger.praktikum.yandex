import ErrorHandler from '../error/ErrorHandler'
import defaultRules from './rules'

export default class Validator {
  constructor(options) {
    this._options = options

    const { form, rules = defaultRules } = options

    if (!form) ErrorHandler.handle('form must be defined!')

    this.form = form
    this.rules = rules
    this.errors = Object.keys(form).reduce((acc, cur) => {
      return Object.assign(acc, { [cur]: [] })
    }, {})
  }

  static isDirty(value, rule) {
    return !rule(value)
  }

  validateAllFields(target, rules) {
    Object.entries(target).forEach(([key, value]) => {
      const fieldRules = rules[key]

      if (value && fieldRules?.length > 0) {
        fieldRules.forEach((rule) => {
          if (Validator.isDirty(value, rule.check)) this.errors[key].push(rule.message)
        })
      }
    })

    return Object.values(this.errors).every((val) => val === [])
  }

  initValidation() {
    const { form } = this
    const formElements = Object.keys(form).reduce((acc, cur) => {
      return Object.assign(acc, { [cur]: document.getElementById(form[cur].id) })
    }, {})

    Object.entries(formElements).forEach(([field, element]) => {
      if (form[field].rules) {
        element.onblur = (e) => this.onBlurCallback({
          target: element,
          messageContainer: element.closest('label').querySelector('.input-helper'),
          defaultValue: form[field].helper ?? '',
          fieldRules: form[field].rules
        })

        element.onfocus = element.onblur
      }
    })
  }

  onBlurCallback(options) {
    const { target, messageContainer, defaultValue, fieldRules } = options

    fieldRules.forEach((ruleName) => {
      const rule = this.rules.find((rule) => rule.name === ruleName)

      if (!rule) console.error(`No such rule: ${ruleName}`)

      if (Validator.isDirty(target.value, rule.check)) {
        if (!messageContainer.hasAttribute('dirty')) {
          messageContainer.setAttribute('dirty', true)
          messageContainer.innerHTML = rule.message
        }
      } else {
        if (messageContainer.hasAttribute('dirty')) {
          messageContainer.removeAttribute('dirty')
          messageContainer.innerHTML = defaultValue
        }
      }
    })
  }
}
