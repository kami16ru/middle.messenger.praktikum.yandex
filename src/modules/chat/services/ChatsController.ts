import API, { ChatResponse } from './chatApi'
import store from '../../../utils/Store'
import MessagesController from './MessagesController'

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
    const chats = await this.api.getChats()

    chats.map(async (chat: ChatResponse) => {
      const tokenResponse = await this.getToken(chat.id)

      console.log(chat.id, tokenResponse.token)

      await MessagesController.connect(chat.id, tokenResponse.token)
    })

    store.set('chats', chats)
  }

  addUserToChat(id: number, userId: number) {
    this.api.addUsersToChat({ chatId: id, user: [userId] })
  }

  async delete(id: number) {
    await this.api.deleteChat({ chatId: id })

    await this.fetchChats()
  }

  async getToken(id: number) {
    return await this.api.getChatToken(id)
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
