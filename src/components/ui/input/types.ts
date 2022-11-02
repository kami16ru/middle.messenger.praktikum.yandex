export interface InputProps {
  name: string
  type: string
  placeholder?: string
  label?: string
  helper?: string
  rules?: Array<string>
  value?: string
  readonly?: boolean
  required?: boolean
  events?: {
    blur?: () => void
    focus?: () => void
  }
}
