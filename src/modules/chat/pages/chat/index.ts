import template from './template.hbs'
import './style.css'
import Component from '../../../../lib/dom/Component'
import { ComponentOptionsWithoutTemplate } from '../../../../lib/dom/types'
import { NavDrawer } from '../../../../components/ui/nav/drawer/index'
import store, { withStore } from '../../../../lib/dom/Store'
import ChatsController from '../../services/ChatsController'
import { ChatResponse } from '../../services/chatApi'

const navDrawer = new NavDrawer({
  props: {
    withHeaderMenu: true,
    activeMenuConfig: 'chat'
  }
})

class ChatPageComponent extends Component {
  constructor(options: ComponentOptionsWithoutTemplate = {}) {
    super({
      template,
      ...options,
      props: {
        ...options.props,
        navDrawerId: navDrawer.id
      },
      components: { navDrawer },
      attrs: {
        class: 'chat-page'
      }
    })
  }

  mounted() {
    super.mounted()

    navDrawer.eventBus.on('chat:selected', this.onChatSelected.bind(this))
  }

  onChatSelected(chatId: ChatResponse['id']) {
    console.log(chatId)
    console.log(store.getState())
    ChatsController.selectChat(chatId)
    console.log(store.getState())
  }
}

export const ChatPage = withStore((state) => ({
  chats: state.chats,
  selectedChat: state.selectedChat
}))(ChatPageComponent)
