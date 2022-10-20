import { httpService } from '../httpService'
import { User } from './auth'

const endpoint = '/chats'

export interface LastMessage {
  user: User,
  time: string,
  content: string
}

export interface Chat {
  id: number,
  title: string,
  avatar: string,
  unread_count: number,
  last_message: LastMessage
}

export interface CreateChatData {
  title: string
}

export interface ChatByIdData {
  chatId: number
}

export interface UploadAvatarData {
  chatId: number
  avatar: unknown
}

export interface UsersByChatIdData {
  user: number[]
  chatId: number
}

export const getChats = () => httpService(endpoint).get({})
export const getArchiveChats = () => httpService(endpoint).get({ path: '/archive' })
export const createChat = (data: CreateChatData) => httpService(endpoint).post({ path: '', params: { data } })
export const deleteChat = (data: ChatByIdData) => httpService(endpoint).delete({ path: '', params: { data } })
export const archiveChat = (data: ChatByIdData) => httpService(endpoint).post({ path: '/archive', params: { data } })
export const unArchiveChat = (data: ChatByIdData) => httpService(endpoint).post({ path: '/unarchive', params: { data } })
export const uploadChatAvatar = (data: UploadAvatarData) => httpService(endpoint).put({ path: '/avatar', params: { data } })
export const addUsersToChat = (data: UsersByChatIdData) => httpService(endpoint).put({ path: '/users', params: { data } })
export const deleteUsersFromChat = (data: UsersByChatIdData) => httpService(endpoint).delete({ path: '/users', params: { data } })
