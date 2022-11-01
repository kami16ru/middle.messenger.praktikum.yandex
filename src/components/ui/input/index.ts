import Block from '../../../lib/dom/Block'
import template from './template.hbs'
import './style.css'
import { InputProps } from './types'

export class Input extends Block<InputProps> {
  constructor(props: InputProps) {
    super(props)

    if (props.value) this.setValue(props.value)
  }

  public setValue(value: string) {
    return (this.element as HTMLInputElement).value = value
  }

  public getName() {
    return (this.element as HTMLInputElement).name
  }

  public getValue() {
    return (this.element as HTMLInputElement).value
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}
