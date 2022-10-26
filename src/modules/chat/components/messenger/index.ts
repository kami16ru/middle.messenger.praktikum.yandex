import Component, { getTemplatesFromComponents } from '../../../../lib/dom/Component'
import template from './template.hbs'
import { Message } from '../message/index'
import { Input } from '../input/index'
import { Button } from '../button/index'
import './style.css'
import MessagesController, { Message as MessageInfo } from '../../services/MessagesController'
import { withStore } from '../../../../lib/dom/Store'
import store from '../../../../lib/dom/Store'

interface MessengerProps {
  selectedChat: number | undefined;
  messages: MessageInfo[];
  userId: number;
}

interface MessengerOptions {
  props: MessengerProps
}

function createMessages(props: MessengerProps) {
  const { messages, userId } = props

  if (!messages) return {}

  return messages.reduce((acc: Record<string, Component>, cur: MessageInfo) => {
    const component = new Message({
      props: {
        ...cur,
        isMine: userId === cur.user_id
      }
    })

    return Object.assign(acc, {
      [component._id]: component
    })
  }, {})
}

const sendMessageInput = new Input({
  props: {
    type: 'text',
    placeholder: 'Сообщение',
    name: 'message'
  }
})

const sendMessageButton = new Button({
  props: {
    label: 'Отправить',
    type: 'button'
  }
})

class MessengerComponent extends Component {
  messageToSend: ''

  constructor(options: MessengerOptions) {
    const messageComponents = createMessages(options.props || {})
    const messageTemplates = getTemplatesFromComponents(messageComponents)

    super({
      template,
      ...options,
      props: {
        ...options.props,
        sendMessageInputId: sendMessageInput.id,
        sendMessageButtonId: sendMessageButton.id,
        messageTemplates
      },
      components: { sendMessageInput, sendMessageButton }
    })
  }

  mounted() {
    super.mounted()

    const { buttonId } = sendMessageButton

    if (buttonId) {
      const sendMessageButton = document.getElementById(buttonId) as HTMLElement

      if (sendMessageButton) sendMessageButton.onclick = this.onButtonClick.bind(this)
    }

    sendMessageInput.eventBus.on('input', this.onInput.bind(this))
    sendMessageButton.eventBus.on('click', this.onButtonClick.bind(this))
  }

  onInput(val: any) {
    this.messageToSend = val.target.value
  }

  onButtonClick() {
    // const input = this.components.sendMessageInput as Input
    // const message = input.getValue()
    //
    // input.setValue('')

    console.log(this.messageToSend, this.props?.selectedChat)

    if (this.props?.selectedChat && typeof this.props.selectedChat === 'number')
      MessagesController.sendMessage(this.props.selectedChat, this.messageToSend)
  }
}

export const Messenger = withStore((state) => {
  const selectedChatId = state.selectedChat

  if (!selectedChatId) {
    return {
      messages: [],
      selectedChat: undefined,
      userId: state.user?.id
    }
  }

  return {
    messages: (state.messages || {})[selectedChatId] || [],
    selectedChat: state.selectedChat,
    userId: state.user?.id
  }
})(MessengerComponent)
