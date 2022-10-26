export type ValidationRuleConfig = {
  name: string
  message: string
  check: ((value: string) => boolean) | ((value: string) => RegExpMatchArray | null)
}

export type ValidatorConfig = {
  id?: string
  name: string
  label?: string
  rules?: string[]
  helper?: string
  type?: string
}

export type OnBlurCallbackOptions = {
  target: HTMLInputElement
  messageContainer: HTMLElement
  defaultValue?: string,
  fieldRules: string[]
}
