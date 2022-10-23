import { set } from '../helpers/myDash'
import { EventBus } from './EventBus'
import Component from './Component'

export enum StoreEvents {
  Updated = 'updated'
}

export class Store extends EventBus {
  private state: any = {};

  public set(keypath: string, data: unknown) {
    set(this.state, keypath, data)

    this.emit('updated', this.getState())
  }

  public getState() {
    return this.state
  }
}

export const store = new Store()

export function withStore(mapStateToProps: (state: any) => any) {

  return function wrap(ComponentWrapper: typeof Component) {
    let previousState: any

    return class WithStore extends ComponentWrapper {

      constructor(options: any) {
        previousState = mapStateToProps(store.getState())

        super({
          ...options,
          store: previousState
        })

        store.on('updated', this.onStoreUpdated.bind(this))
      }

      onStoreUpdated() {
        const stateProps = mapStateToProps(store.getState())

        previousState = stateProps

        this.setProps({ ...stateProps })
      }
    }
  }
}

export default store
