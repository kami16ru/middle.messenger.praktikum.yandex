import template from './template.hbs'
import './style.css'
import Component from '../../../../lib/dom/Component'
import { v4 as makeUUID } from 'uuid'

interface ButtonProps {
  type?: string
  label: string
  events?: {
    click: () => void
  }
}

interface ButtonOptions {
  props: ButtonProps
}

export class Button extends Component {
  buttonId: string

  constructor(options: ButtonOptions) {
    const buttonId = makeUUID()

    super({
      template,
      ...options,
      props: {
        type: 'button',
        ...options.props,
        buttonId
      }
    })

    this.buttonId = buttonId
  }

  mounted() {
    super.mounted()

    const button = document.getElementById(this.buttonId)

    if (button) button.onclick = this.onButtonClick.bind(this)
  }

  onButtonClick() {
    this.eventBus.emit('click')
  }
}
