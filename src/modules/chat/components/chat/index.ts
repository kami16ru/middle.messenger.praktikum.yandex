import Block from '../../../../lib/dom/Block'
import template from './template.hbs'
import './style.css'
import { withStore } from '../../../../lib/dom/Store'
import { ChatResponse } from '../../services/chatApi'

interface ChatProps {
  id: number
  title: string
  unread_count: number
  selectedChat: ChatResponse
  events: {
    click: () => void
  }
}

class ChatBase extends Block<ChatProps> {
  constructor(props: ChatProps) {
    super(props)
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props, isSelected: this.props.id === this.props.selectedChat?.id })
  }
}

export const withSelectedChat = withStore((state) => ({ selectedChat: (state.chats || []).find(({ id }) => id === state.selectedChat) }))

export const Chat = withSelectedChat(ChatBase)
