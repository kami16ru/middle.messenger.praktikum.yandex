export interface InputProps {
  name: string
  type: string
  placeholder?: string
  label: string
  helper: string
  rules: Array<string>
  events?: {
    blur?: () => void
    focus?: () => void
  }
}
