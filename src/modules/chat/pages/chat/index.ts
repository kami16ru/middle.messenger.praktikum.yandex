import template from './template.hbs'
import './style.css'
import Component from '../../../../lib/dom/Component'
import { ComponentOptionsWithoutTemplate } from '../../../../lib/dom/types'
import ChatEntity from '../../../../lib/chat/ChatEntity'
import { NavDrawer } from '../../../../components/ui/nav/drawer/index'

const navDrawer = new NavDrawer({
  props: {
    withHeaderMenu: true,
    activeMenuConfig: 'chat'
  }
})

export class ChatPage extends Component {
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

  onChatSelected(chat: ChatEntity) {
    console.log(chat)
  }
}
