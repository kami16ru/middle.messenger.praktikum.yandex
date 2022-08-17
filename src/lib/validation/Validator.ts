import ErrorHandler from '../error/ErrorHandler'
import defaultRules from './rules'
import { IValidator, ValidatorOptions, ValidationRuleConfig, OnBlurCallbackOptions } from './types'

export default class Validator implements IValidator {
  _options
  form
  rules
  errors

  constructor(options: ValidatorOptions) {
    this._options = options

    const { form, rules = defaultRules } = options

    if (!form) ErrorHandler.handle('form must be defined!')

    this.form = form
    this.rules = rules
    this.errors = Object.keys(form).reduce((acc, cur) => {
      return Object.assign(acc, { [cur]: [] })
    }, {})
  }

  static isDirty(value: string, rule: ValidationRuleConfig['check']) {
    return !rule(value)
  }

  // ToDo пофиксить перед использованием
  // validateAllFields(form: ValidatorOptions['form'], rules: Record<string, ValidationRuleConfig>) {
  //   Object.entries(form).forEach(([key, value]) => {
  //     const fieldRules = value.rules
  //
  //     if (value && fieldRules?.length > 0) {
  //       fieldRules.forEach((rule) => {
  //         if (Validator.isDirty(value, rule.check)) this.errors[key].push(rule.message)
  //       })
  //     }
  //   })
  //
  //   return Object.values(this.errors).every((val) => val === [])
  // }

  initValidation() {
    const { form } = this
    const formElements = Object.keys(form).reduce((acc, cur) => {
      return Object.assign(acc, { [cur]: document.getElementById(form[cur].id) })
    }, {})

    Object.entries(formElements).forEach(([field, element]: [string, HTMLInputElement]) => {
      if (form[field].rules) {
        element.onblur = () => this.onBlurCallback({
          target: element,
          messageContainer: element.closest('label').querySelector('.input-helper'),
          defaultValue: form[field].helper ?? '',
          fieldRules: form[field].rules
        })

        element.onfocus = element.onblur
      }
    })
  }

  onBlurCallback(options: OnBlurCallbackOptions) {
    const { target, messageContainer, defaultValue, fieldRules } = options

    fieldRules.forEach((ruleName) => {
      const rule = this.rules.find((rule) => rule.name === ruleName)

      if (!rule) console.error(`No such rule: ${ruleName}`)

      if (Validator.isDirty(target.value, rule.check)) {
        if (!messageContainer.hasAttribute('dirty')) {
          messageContainer.setAttribute('dirty', '1')
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
