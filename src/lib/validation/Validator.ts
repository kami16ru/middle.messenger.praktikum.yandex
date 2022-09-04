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
    this.errors = form.reduce((acc, cur) => {
      return Object.assign(acc, { [cur.name]: [] })
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

    form.forEach((formConfig) => {
      if (formConfig.rules) {
        const element = document.getElementById(formConfig.id) as HTMLInputElement

        if (element) {
          const closetsLabel = element.closest('label')

          if (closetsLabel) {
            element.onblur = () => this.onBlurCallback({
              target: element,
              messageContainer: closetsLabel.querySelector('.input-helper') as HTMLElement,
              defaultValue: formConfig.helper ?? '',
              fieldRules: formConfig.rules ?? []
            })

            element.onfocus = element.onblur
          }
        }
      }
    })
  }

  onBlurCallback(options: OnBlurCallbackOptions) {
    const { target, messageContainer, defaultValue = '', fieldRules } = options

    fieldRules.forEach((ruleName) => {
      const rule = this.rules.find((rule: ValidationRuleConfig) => rule.name === ruleName)

      if (!rule) throw new Error(`No such rule: ${ruleName}`)

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
