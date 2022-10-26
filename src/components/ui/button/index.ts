import Block from '../../../utils/Block'
import template from './template.hbs'
import './style.css'
import { ButtonProps } from './types'

export class Button extends Block<ButtonProps> {
  constructor(props: ButtonProps) {
    super({ type: 'button', ...props })
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}
