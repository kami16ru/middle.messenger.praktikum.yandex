import Block from '../../../utils/Block'
import template from './template.hbs'
import { Input } from '../input/index'
// import './style.css'
import Validator from '../../../lib/validation/Validator'
import { OnBlurCallbackOptions, ValidationRuleConfig, ValidatorConfig } from '../../../lib/validation/types'
import defaultRules from '../../../lib/validation/rules'
import { InputProps } from '../input/types'

export interface FormProps {
  inputs: Array<InputProps>
}

export class Form extends Block {
  constructor(props: FormProps) {
    super(props)
  }

  init() {
    this.children.inputs = this.createInputs(this.props.inputs)
  }

  validate(inputProps: ValidatorConfig) {
    console.log(inputProps)

    const element = document.querySelector(`input[name="${inputProps.name}"]`) as HTMLInputElement

    if (element) {
      const closetsLabel = element.closest('label')

      console.log(closetsLabel)

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
    console.log(options)

    const rules = defaultRules

    const { target, messageContainer, defaultValue = '', fieldRules } = options

    console.log(target.value)

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

  createInputs(inputs: InputProps[]) {
    return inputs.map((props) => {
      return new Input({
        ...props,
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
