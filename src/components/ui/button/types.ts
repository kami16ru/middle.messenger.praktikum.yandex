export interface ButtonProps {
  type?: string
  label: string
  class?: string
  events?: {
    click: () => void
  },
}
