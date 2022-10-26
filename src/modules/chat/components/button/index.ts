import template from './template.hbs'
import './style.css'
import Component from '../../../../lib/dom/Component'

interface ButtonProps {
  type?: string;
  label: string;
  events?: {
    click: () => void;
  };
}

interface ButtonOptions {
  props: ButtonProps
}

export class Button extends Component {
  constructor(options: ButtonOptions) {
    super({
      template,
      ...options,
      props: {
        type: 'button',
        ...options.props
      }
    })
  }
}
