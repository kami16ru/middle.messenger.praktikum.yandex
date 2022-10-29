import { set } from '../helpers/myDash'
import { EventBus } from './EventBus'
import Block from './Block'
import { UserResponse } from '../../modules/auth/services/authApi'
import { ChatResponse } from '../../modules/chat/services/chatApi'
import { Message } from '../../modules/chat/services/MessagesController'
import { navDrawerHeader } from '../../config/nav'

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

    this.state.nav = { selectedNavList: navDrawerHeader.find((config) => config.active)?.name as string }
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

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.store = store

export function withStore<SP>(mapStateToProps: (state: State) => SP) {
  return function wrap<P>(Component: typeof Block<SP & P>) {

    return class WithStore extends Component {

      constructor(props: Omit<P, keyof SP>) {
        let previousState = mapStateToProps(store.getState())

        super({ ...(props as P), ...previousState })

        store.on(StoreEvents.Updated, () => {
          const stateProps = mapStateToProps(store.getState())

          previousState = stateProps

          this.setProps({ ...stateProps })
        })

      }

    }

  }
}

export default store
