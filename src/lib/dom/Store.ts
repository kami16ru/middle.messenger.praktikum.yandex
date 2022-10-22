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

    this.emit(StoreEvents.Updated, this.getState())
  }

  public getState() {
    return this.state
  }
}

const store = new Store()

export function withStore(mapStateToProps: (state: any) => any) {

  return function wrap(ComponentWrapper: typeof Component) {
    let previousState: any

    return class WithStore extends ComponentWrapper {

      constructor(props: any) {
        previousState = mapStateToProps(store.getState())

        super({ ...props, ...previousState })

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
