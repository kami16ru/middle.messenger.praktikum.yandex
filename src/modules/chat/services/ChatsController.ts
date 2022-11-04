import API, { ChatResponse } from './chatApi'
import store from '../../../lib/dom/Store'
import MessagesController from './MessagesController'
import { ErrorHandler } from '../../../lib/error/ErrorHandler'
import { errorMessages } from '../../../config/errorMessages'

class ChatsController {
  private readonly api;

  constructor() {
    this.api = API
  }

  async create(title: string) {
    await this.api.createChat({ title })

    await this.fetchChats()
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
      ErrorHandler.handle(errorMessages.httpErrors.SERVER_ERROR)
    }
  }

  addUserToChat(id: number, userId: number) {
    try {
      this.api.addUsersToChat({ chatId: id, user: [userId] })
    } catch (e) {
      ErrorHandler.handle(errorMessages.httpErrors.SERVER_ERROR)
    }
  }

  async delete(id: number) {
    try {
      await this.api.deleteChat({ chatId: id })

      await this.fetchChats()
    } catch (e) {
      ErrorHandler.handle(errorMessages.httpErrors.SERVER_ERROR)
    }
  }

  async getToken(id: number) {
    try {
      return await this.api.getChatToken(id)
    } catch (e) {
      ErrorHandler.handle(errorMessages.httpErrors.SERVER_ERROR)

      return Promise.reject(errorMessages.httpErrors.SERVER_ERROR)
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
