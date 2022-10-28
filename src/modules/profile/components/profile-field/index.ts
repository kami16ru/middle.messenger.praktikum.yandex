import Block from '../../../../lib/dom/Block'
import template from './template.hbs'

interface ProfileFieldProps {
  name: string;
  value: string | number;
}

export class ProfileField extends Block<ProfileFieldProps> {
  constructor(props: ProfileFieldProps) {
    super(props)
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props)
  }
}
