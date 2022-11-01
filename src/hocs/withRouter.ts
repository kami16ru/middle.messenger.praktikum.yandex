import Block from '../lib/dom/Block'
import Router from '../lib/dom/Router'

export function withRouter(Component: typeof Block<any>) {
  type Props = typeof Component extends typeof Block<infer P> ? P : any

  return class WithRouter extends Component {
    constructor(props: Props & PropsWithRouter) {
      super({ ...props, router: Router })
    }
  }
}

export interface PropsWithRouter {
  router: typeof Router
}
