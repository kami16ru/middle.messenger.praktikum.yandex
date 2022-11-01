export type ChatMessage = {
  user: User
  time: string
  content: string
}

export type User = {
  first_name: string
  second_name: string
  avatar: string
  email: string
  login: string
  phone: string
}

export type Chat = {
  id: number
  title: string
  avatar: string
  unread_count: number
  last_message: ChatMessage
}
