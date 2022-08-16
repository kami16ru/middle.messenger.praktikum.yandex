export interface IValidator {
  _options: ValidatorOptions
}

export type ValidatorOptions = {
  form: Record<string, FormConfig>
  rules: ValidationRuleConfig[]
}

export type ValidationRuleConfig = {
  name: string
  message: string
  check: ((value: string) => boolean) | ((value: string) => RegExpMatchArray)
}

export type FormConfig = {
  id: string
  name: string
  label?: string
  rules?: string[]
  helper?: string
}

export type OnBlurCallbackOptions = {
  target: HTMLInputElement
  messageContainer: HTMLElement
  defaultValue?: string,
  fieldRules: string[]
}
