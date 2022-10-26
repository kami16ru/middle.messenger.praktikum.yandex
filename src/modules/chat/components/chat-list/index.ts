import template from './template.hbs'
import './style.css'
import Component from '../../../../lib/dom/Component'
import { ComponentOptionsWithoutTemplate } from '../../../../lib/dom/types'
import data from '../../../../util/data'
import ChatsController from '../../services/ChatsController'
import { withStore } from '../../../../lib/dom/Store'
import { Input } from '../input/index'
import { Button } from '../button/index'

const input = new Input({
  props: {
    name: 'message-input',
    type: 'text',
    placeholder: 'Название нового чата...'
  }
})

const button = new Button({
  props: {
    label: 'Создать',
    type: 'button'
  }
})

class ChatListComponent extends Component {
  chatItem: HTMLElement

  constructor(options: ComponentOptionsWithoutTemplate) {
    super({
      template,
      ...options,
      props: {
        ...options.props,
        chats: data.chats,
        createChatInputId: input.id,
        createChatBtnId: button.id
      },
      components: { input, button },
      attrs: {
        class: 'chat-list'
      }
    })
  }

  async mounted() {
    super.mounted()

    // await MessagesController.closeAll()

    if (!this.props?.chats) {
      await ChatsController.fetchChats()

      this.dispatchComponentDidUpdate({ ...this.props })
    }

    const chatList = document.querySelectorAll('.chat-list__item')

    if (chatList.length > 0) chatList.forEach( (chatItem) => {
      if (chatItem instanceof HTMLElement) {
        chatItem.onclick = (e) => {
          const el = e.target as HTMLElement
          const chatListItem = el.closest('.chat-list__item') as HTMLElement

          this.eventBus.emit('chat:selected', chatListItem.dataset.id)
        }
      }
    })

    const btn = document.querySelector('button') as HTMLElement

    btn.onclick = () => {
      ChatsController.create('новый чат2')
    }
  }
}

export const ChatList = withStore((state) => ({
  chats: state.chats,
  selectedChat: state.selectedChat,
  user: state.user
}))(ChatListComponent)
