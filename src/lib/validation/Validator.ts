import defaultRules from './rules'
import { ValidatorConfig, ValidationRuleConfig, OnBlurCallbackOptions } from './types'

export default class Validator {
  _config
  rules
  errors: Array<unknown>

  constructor(config: ValidatorConfig) {
    this._config = config

    this.rules = defaultRules
    this.errors = []
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
    const config = this._config

    console.log('validator', config)

    if (config.rules) {
      // eslint-disable-next-line prefer-destructuring
      const element = document.getElementsByName(config.name)[0] as HTMLInputElement

      console.log(document.getElementsByName(config.name), config)

      if (element) {
        const closetsLabel = element.closest('label')

        if (closetsLabel) {
          element.onblur = () => this.onBlurCallback({
            target: element,
            messageContainer: closetsLabel.querySelector('.input-helper') as HTMLElement,
            defaultValue: config.helper ?? '',
            fieldRules: config.rules ?? []
          })

          element.onfocus = element.onblur
        }
      }
    }
  }

  onBlurCallback(options: OnBlurCallbackOptions) {
    const { target, messageContainer, defaultValue = '', fieldRules } = options

    fieldRules.forEach((ruleName) => {
      const rule = this.rules?.find((rule: ValidationRuleConfig) => rule.name === ruleName)

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
