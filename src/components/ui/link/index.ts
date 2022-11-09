import Block from '../../../lib/dom/Block'
import { PropsWithRouter, withRouter } from '../../../lib/dom/hocs/withRouter'
import template from './template.hbs'
import './style.css'
import Router from '../../../lib/dom/Router'

interface LinkProps extends PropsWithRouter {
  to: string;
  label: string;
  events?: {
    click: () => void;
  };
}

class BaseLink extends Block<LinkProps> {
  constructor(props: LinkProps) {
    super({
      ...props,
      events: {
        click: () => this.navigate()
      }
    })
  }

  navigate() {
    Router.go(this.props.to)
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}

export const Link = withRouter(BaseLink)
