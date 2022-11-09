import Block from '../../../../../lib/dom/Block'
import template from './template.hbs'
import './style.css'
import { withStore } from '../../../../../lib/dom/hocs/withStore'
import { ChatResponse } from '../../../services/chatApi'

interface ChatProps {
  id: number
  title: string
  unread_count: number
  selectedChat: ChatResponse
  events: {
    click: () => void
  }
}

class ChatItemComponent extends Block<ChatProps> {
  constructor(props: ChatProps) {
    super(props)
  }

  protected render(): DocumentFragment {
    return this.compile(template, {
      ...this.props,
      isSelected: this.props.id === this.props.selectedChat?.id,
      avatar: '/images/avatars/avatar1.svg'
    })
  }
}

export const withSelectedChat = withStore((state) => ({ selectedChat: (state.chats || []).find(({ id }) => id === state.selectedChat) }))

export const ChatItem = withSelectedChat(ChatItemComponent)
