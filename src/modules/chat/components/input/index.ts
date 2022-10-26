import template from './template.hbs'
import './style.css'
import Component from '../../../../lib/dom/Component'
import { v4 as makeUUID } from 'uuid'

interface InputProps {
  name: string;
  type: string;
  placeholder: string;
}

interface InputOptions {
  props: InputProps
}

export class Input extends Component {
  inputId: string

  constructor(options: InputOptions) {
    const inputId = makeUUID()

    super({
      template,
      ...options,
      props: {
        ...options.props,
        inputId
      }
    })

    this.inputId = inputId
  }

  mounted() {
    super.mounted()

    const input = document.getElementById(this.inputId) as HTMLElement

    if (input) input.oninput = this.onInput.bind(this)
  }

  onInput(e: InputEvent) {
    this.eventBus.emit('input', e)
  }

  public setValue(value: string) {
    return (this._element as HTMLInputElement).value = value
  }

  public getName() {
    return (this._element as HTMLInputElement).name
  }

  public getValue() {
    return (this._element as HTMLInputElement).value
  }
}
