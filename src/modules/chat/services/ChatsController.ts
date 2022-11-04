import API, { ChatResponse } from './chatApi'
import store from '../../../lib/dom/Store'
import MessagesController from './MessagesController'
import { HTTPErrorHandler } from '../../../lib/http/HTTPErrorHandler'

class ChatsController {
  private readonly api;

  constructor() {
    this.api = API
  }

  async create(title: string) {
    try {
      await this.api.createChat({ title })

      await this.fetchChats()
    } catch (e) {
      HTTPErrorHandler.handleHttp(e)
    }
  }

  async fetchChats() {
    try {
      const chats = await this.api.getChats()

      chats.map(async (chat: ChatResponse) => {
        const tokenResponse = await this.getToken(chat.id)

        console.log(chat.id, tokenResponse.token)

        await MessagesController.connect(chat.id, tokenResponse.token)
      })

      store.set('chats', chats)
    } catch (e) {
      HTTPErrorHandler.handleHttp(e)
    }
  }

  addUserToChat(id: number, userId: number) {
    try {
      this.api.addUsersToChat({ chatId: id, user: [userId] })
    } catch (e) {
      HTTPErrorHandler.handleHttp(e)
    }
  }

  async delete(id: number) {
    try {
      await this.api.deleteChat({ chatId: id })

      await this.fetchChats()
    } catch (e) {
      HTTPErrorHandler.handleHttp(e)
    }
  }

  async getToken(id: number) {
    try {
      return await this.api.getChatToken(id)
    } catch (e) {
      HTTPErrorHandler.handleHttp(e)

      return Promise.reject(e?.response?.reason)
    }
  }

  selectChat(id: number) {
    store.set('selectedChat', id)
  }
}

const controller = new ChatsController()

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.chatsController = controller

export default controller
