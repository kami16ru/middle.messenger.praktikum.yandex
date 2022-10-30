import template from './template.hbs'
import { Message } from '../message/index'
import { Input } from '../../../../components/ui/input/index'
import { Button } from '../../../../components/ui/button/index'
import './style.css'
import MessagesController, { Message as MessageInfo } from '../../services/MessagesController'
import { withStore } from '../../../../lib/dom/Store'
import Block from '../../../../lib/dom/Block'
import ChatsController from '../../services/ChatsController'

interface MessengerProps {
  selectedChat: number | undefined
  messages: MessageInfo[]
  userId: number
}

class MessengerBase extends Block<MessengerProps> {
  constructor(props: MessengerProps) {
    super(props)
  }
  protected async init() {
    this.children.messages = this.createMessages(this.props)

    this.children.input = new Input({
      type: 'text',
      placeholder: 'Сообщение',
      name: 'message'
    })

    this.children.button = new Button({
      label: 'Отправить',
      type: 'button',
      class: 'bg-primary white',
      events: {
        click: () => {
          const input = this.children.input as Input
          const message = input.getValue()

          input.setValue('')

          MessagesController.sendMessage(this.props.selectedChat!, message)
        }
      }
    })

    await ChatsController.fetchChats()
  }

  protected componentDidUpdate(_oldProps: MessengerProps, newProps: MessengerProps): boolean {
    this.children.messages = this.createMessages(newProps)

    return true
  }

  private createMessages(props: MessengerProps) {
    return props.messages.map((data) => {
      return new Message({ ...data, isMine: props.userId === data.user_id })
    })
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props })
  }
}

const withSelectedChatMessages = withStore((state) => {
  const selectedChatId = state.selectedChat

  if (!selectedChatId) {
    return {
      messages: [],
      selectedChat: undefined,
      userId: state.user.id
    }
  }

  return {
    messages: (state.messages || {})[selectedChatId] || [],
    selectedChat: state.selectedChat,
    userId: state.user.id
  }
})

export const Messenger = withSelectedChatMessages(MessengerBase)
