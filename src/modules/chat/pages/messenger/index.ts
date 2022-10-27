import Block from '../../../../utils/Block'
import template from './template.hbs'
import { ChatsList } from '../../components/chat-list/index'
import { Messenger } from '../../components/messenger/index'
import './style.css'
import ChatsController from '../../services/ChatsController'

export class MessengerPage extends Block {
  constructor() {
    super({})
  }

  protected init() {
    this.children.chatsList = new ChatsList({ isLoaded: false })

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.children.messenger = new Messenger({})

    ChatsController.fetchChats().finally(() => {
      (this.children.chatsList as Block).setProps({
        isLoaded: true
      })
    })
  }

  protected render(): DocumentFragment {
    return this.compile(template, { })
  }
}
