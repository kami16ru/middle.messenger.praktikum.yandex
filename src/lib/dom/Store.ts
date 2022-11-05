import { set } from '../helpers/myDash'
import { EventBus } from './EventBus'
import { UserResponse } from '../../modules/auth/services/authApi'
import { ChatResponse } from '../../modules/chat/services/chatApi'
import { Message } from '../../modules/chat/services/MessagesController'

export enum StoreEvents {
  Updated = 'updated'
}

export interface State {
  user: UserResponse
  chats: ChatResponse[]
  messages: Record<number, Message[]>
  selectedChat?: number
  nav: {
    selectedNavList: string
  }
}

export class Store extends EventBus {
  private state: any = {}

  constructor() {
    super()

    this.state.nav = { selectedNavList: '' }
  }

  public set(keypath: string, data: unknown) {
    set(this.state, keypath, data)

    this.emit(StoreEvents.Updated, this.getState())
  }

  public getState() {
    return this.state
  }
}

const store = new Store()

export default store
