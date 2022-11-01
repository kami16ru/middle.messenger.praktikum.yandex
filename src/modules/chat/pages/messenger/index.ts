import Block from '../../../../lib/dom/Block'
import template from './template.hbs'
import { ChatsList } from '../../components/chat-list'
import { Messenger } from '../../components/messenger'
import './style.css'
import ChatsController from '../../services/ChatsController'
import { NavDrawer } from '../../../../components/nav/drawer'
import store from '../../../../lib/dom/Store'

export class MessengerPage extends Block {
  constructor() {
    super({})
  }

  protected init() {
    store.set('nav.selectedNavList', 'chatList')
    this.children.navDrawer = new NavDrawer({ withHeaderMenu: true })
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
