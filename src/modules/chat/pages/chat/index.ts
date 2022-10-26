import template from './template.hbs'
import './style.css'
import Component from '../../../../lib/dom/Component'
import { ComponentOptionsWithoutTemplate } from '../../../../lib/dom/types'
import { NavDrawer } from '../../../../components/ui/nav/drawer/index'
import store, { withStore } from '../../../../lib/dom/Store'
import ChatsController from '../../services/ChatsController'
import { ChatResponse } from '../../services/chatApi'
import { Messenger } from '../../components/messenger/index'

const navDrawer = new NavDrawer({
  props: {
    withHeaderMenu: true,
    activeMenuConfig: 'chat'
  }
})

const messenger = new Messenger({})

class ChatPageComponent extends Component {
  constructor(options: ComponentOptionsWithoutTemplate = {}) {
    super({
      template,
      ...options,
      props: {
        ...options.props,
        navDrawerId: navDrawer.id,
        messengerId: messenger.id
      },
      components: { navDrawer, messenger },
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

    console.log(this.components.messenger)

    this.components.messenger.dispatchComponentDidUpdate(messenger.props)
  }
}

export const ChatPage = withStore((state) => ({
  chats: state.chats,
  selectedChat: state.selectedChat
}))(ChatPageComponent)
