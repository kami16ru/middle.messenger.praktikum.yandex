import template from './template.hbs'
import './style.css'
import Component from '../../../../lib/dom/Component'
import { ComponentOptionsWithoutTemplate } from '../../../../lib/dom/types'
import data from '../../../../util/data'

export class ChatList extends Component {
  chatItem: HTMLElement

  constructor(options: ComponentOptionsWithoutTemplate) {
    super({
      template,
      ...options,
      props: {
        ...options.props,
        chats: data.chats
      },
      attrs: {
        class: 'chat-list'
      }
    })
  }

  mounted() {
    super.mounted()

    this.chatItem = document.querySelector('.chat-list__item') as HTMLElement

    this.chatItem.onclick = (e) => {
      const el = e.target as HTMLElement
      const chatListItem = el.closest('.chat-list__item') as HTMLElement

      this.eventBus.emit('chat:selected', { chat: chatListItem.dataset.id })
    }
  }
}
