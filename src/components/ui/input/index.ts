import Block from '../../../utils/Block'
import template from './template.hbs'
import './style.css'
import { InputProps } from './types'

export class Input extends Block<InputProps> {
  constructor(props: InputProps) {
    super(props)
  }

  init() {
    const element = document.querySelector(`input[name="${this.props.name}"]`) as HTMLInputElement

    // element.addEventListener('blur', this.props.events?.blur?.bind(this))
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
