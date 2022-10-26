import Component from '../../../../lib/dom/Component'
import './style.css'

interface MessageProps {
  content: string
  isMine?: boolean
}

interface MessageOptions {
  props: MessageProps
}

export class Message extends Component {
  constructor(options: MessageOptions) {
    super(options)
  }
}
