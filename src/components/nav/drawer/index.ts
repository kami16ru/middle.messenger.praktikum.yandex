import template from './template.hbs'
import './style.css'
import { NavDrawerHeader } from './header'
import Block from '../../../lib/dom/Block'
import { NavDrawerList } from './list'
import { navDrawerList } from '../../../config/nav'
import { ChatsList } from '../../../modules/chat/components/list'
import { ChatResponse } from '../../../modules/chat/services/chatApi'
import { withStore } from '../../../lib/dom/hocs/withStore'
import ChatsController from '../../../modules/chat/services/ChatsController'

export interface NavDrawerProps {
  withHeaderMenu?: boolean
  collapsed?: boolean
  activeComponent?: string
  selectedNavList: string
  chats?: ChatResponse[]
}

export class NavDrawerComponent extends Block<NavDrawerProps> {
  activeComponent: string

  constructor(props: NavDrawerProps) {
    super(props)
  }

  init() {
    this.setActiveComponent(this.props.selectedNavList || 'navList')
    this.children.activeComponent = this.getActiveComponent(this.activeComponent) as Block
    this.children.navHeader = new NavDrawerHeader({
      withMenu: this.props.withHeaderMenu,
      selectedNavList: this.activeComponent
    })
  }

  protected componentDidUpdate(oldProps: NavDrawerProps, newProps: NavDrawerProps): boolean {
    if (super.componentDidUpdate(oldProps, newProps)) {
      this.setActiveComponent(newProps.selectedNavList as string)

      return true
    } else return false
  }

  setActiveComponent(activeComponentName: string) {
    this.activeComponent = activeComponentName

    if (activeComponentName === 'chatList') {
      ChatsController.fetchChats().finally(() => {
        (this.children.activeComponent as Block).setProps({
          isLoaded: true
        })
      })
    }

    this.children.activeComponent = this.getActiveComponent(this.activeComponent) as Block
  }

  getActiveComponent(val: string) {
    switch (val) {
    case 'navList': {
      return new NavDrawerList({ navList: navDrawerList })
    }
    case 'chatList': {
      return new ChatsList({ isLoaded: false })
    }
    default: {
      return new NavDrawerList({ navList: navDrawerList })
    }
    }
  }

  render() {
    return this.compile(template, this.props)
  }
}

export const withSelectedIcon = withStore((state) => ({ selectedNavList: state.nav?.selectedNavList }))

export const NavDrawer = withSelectedIcon(NavDrawerComponent)
