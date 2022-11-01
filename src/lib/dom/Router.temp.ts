import Router from './Router'
import { BlockConstructable } from './types'
import { expect } from 'chai'
import { fake } from 'sinon'

describe('Router', () => {

  global.window.history.back = () => {
    if (typeof window.onpopstate === 'function') {
      window.onpopstate({ currentTarget: window } as unknown as PopStateEvent)
    }
  }
  global.window.history.forward = () => {
    if (typeof window.onpopstate === 'function') {
      window.onpopstate({ currentTarget: window } as unknown as PopStateEvent)
    }
  }

  const getContentFake = fake.returns(document.createElement('div'))
  const template = fake.returns(document.createElement('div'))

  const DummyComponent = class {
    getContent = getContentFake

    render() { return template }
  } as unknown as BlockConstructable
  // class DummyComponent extends Block {}

  const routeConfig = {
    name: 'profile',
    path: '/settings',
    // redirect: '/settings',
    component: DummyComponent
  }

  it('use() should return Router instance', () => {
    const result = Router.use(routeConfig)

    expect(result).to.eq(Router)
  })

  describe('.back()', () => {
    it('should render a page on history back action', () => {
      Router
        .use(routeConfig)
        .start()

      Router.back()

      expect(getContentFake.callCount).to.eq(1)
    })
  })

  it('should render a page on start', () => {
    Router
      .use(routeConfig)
      .start()

    expect(getContentFake.callCount).to.eq(1)
  })
})
