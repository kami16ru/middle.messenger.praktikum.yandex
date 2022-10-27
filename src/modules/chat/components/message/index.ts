import Block from '../../../../utils/Block'
import template from './template.hbs'
import './style.css'

interface MessageProps {
  content: string;
  isMine: boolean;
}

export class Message extends Block<MessageProps> {
  constructor(props: MessageProps) {
    super(props)
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props })
  }
}
