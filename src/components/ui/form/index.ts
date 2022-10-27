import Block from '../../../utils/Block'
import template from './template.hbs'
import Validator from '../../../lib/validation/Validator'
import { OnBlurCallbackOptions, ValidationRuleConfig, ValidatorConfig } from '../../../lib/validation/types'
import defaultRules from '../../../lib/validation/rules'
import { InputProps } from '../input/types'
import { ValidatedInput } from '../validated-input/index'

export interface FormProps {
  inputs: Array<InputProps>
  readonly?: boolean
}

export class Form extends Block {
  constructor(props: FormProps) {
    super(props)
  }

  init() {
    this.children.inputs = this.createInputs(this.props)
  }

  validate(inputProps: ValidatorConfig) {
    const element = document.querySelector(`input[name="${inputProps.name}"]`) as HTMLInputElement

    if (element) {
      const closetsLabel = element.closest('label')

      if (closetsLabel) {
        const messageContainer = closetsLabel.querySelector('.input-helper') as HTMLElement

        this.onBlurCallback({
          target: element,
          messageContainer,
          defaultValue: inputProps.helper ?? '',
          fieldRules: inputProps.rules ?? []
        })
      }
    }
  }

  onBlurCallback(options: OnBlurCallbackOptions) {
    const rules = defaultRules
    const { target, messageContainer, defaultValue = '', fieldRules } = options

    fieldRules.forEach((ruleName) => {
      const rule = rules.find((rule: ValidationRuleConfig) => rule.name === ruleName)

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

  createInputs(props: FormProps) {
    const { inputs, readonly } = props

    return inputs.map((props) => {
      return new ValidatedInput({
        ...props,
        readonly,
        events: {
          blur: () => this.validate(props),
          focus: () => this.validate(props)
        }
      })
    })
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}
