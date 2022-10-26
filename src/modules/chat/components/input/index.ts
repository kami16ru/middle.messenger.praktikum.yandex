import template from './template.hbs'
import './style.css'
import Component from '../../../../lib/dom/Component'

interface InputProps {
  name: string;
  type: string;
  placeholder: string;
}

interface InputOptions {
  props: InputProps
}

export class Input extends Component {
  constructor(options: InputOptions) {
    super({
      template,
      ...options
    })
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
