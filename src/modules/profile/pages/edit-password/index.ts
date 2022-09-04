import '../style.css'
import template from './template.hbs'
import Component, { createComponentsFromProps, getTemplatesFromComponents } from '../../../../lib/dom/Component'
import { Button } from '../../../../components/ui/button/index'
import { Input } from '../../../../components/ui/input/index'
import Validator from '../../../../lib/validation/Validator'
import { ComponentOptions } from '../../../../lib/dom/types'
import { FormConfig } from '../../../../components/ui/input/types'
import { ButtonConfig } from '../../../../components/ui/button/types'

const form: FormConfig[] = [
  { id: 'form-edit-password-old_password', name: 'old_password', label: 'Старый пароль', value: '', type: 'password', rules: ['isPassword'] },
  { id: 'form-edit-password-new_password', name: 'new_password', label: 'Новый пароль', value: '', type: 'password', rules: ['isPassword'] },
  { id: 'form-edit-password-retype_new_password', name: 'retype_new_password', label: 'Повторите новый пароль', value: '', type: 'password', rules: ['isPassword'] }
]
const inputComponents = createComponentsFromProps(form, Input)
const inputTemplates = getTemplatesFromComponents(inputComponents)

const buttons: ButtonConfig[] = [
  { class: 'bg-dark white', value: 'Сохранить', href: '/settings' },
  { class: 'bg-danger white', value: 'Отменить', href: '/settings' }
]
const buttonComponents = createComponentsFromProps(buttons, Button)
const buttonTemplates = getTemplatesFromComponents(buttonComponents)

export class EditPwdPage extends Component {
  constructor(options: Omit<ComponentOptions, 'template'> = {}) {
    super({
      template,
      props: {
        form,
        buttonTemplates,
        inputTemplates
      },
      components: {
        ...buttonComponents,
        ...inputComponents
      },
      attrs: {
        class: 'profile-edit-password-page container full'
      },
      ...options
    })
  }

  mounted() {
    super.mounted()
    this.initValidation()
  }

  initValidation() {
    const validator = new Validator({ form })

    validator.initValidation()
  }
}
