import { httpService } from '../../../services/httpService'
import { UserResponse } from '../../auth/services/authApi'
import { ByIdRequest } from '../../../services/api/types'

const endpoint = '/chats'

export interface LastMessageResponse {
  user: UserResponse,
  time: string,
  content: string
}

export interface ChatResponse {
  id: number,
  title: string,
  avatar: string,
  unread_count: number,
  last_message: LastMessageResponse
}

export interface CreateChatRequest {
  title: string
}

export interface ChatByIdRequest {
  chatId: number
}

export interface UploadAvatarRequest {
  chatId: number
  avatar: File
}

export interface UsersByChatIdRequest {
  user: number[]
  chatId: number
}

export interface FileResponse {
  id: number,
  user_id: number,
  chat_id: number,
  time: string,
  type: string,
  content: number,
  file: {
    id: number,
    user_id: number,
    path: string,
    filename: string,
    content_type: string,
    content_size: number,
    upload_date: string
  }
}

export interface MessageCountResponse {
  unread_count: number
}

export interface ChatTokenResponse {
  token: string
}

export const getChats = (): Promise<ChatResponse[]> => httpService(endpoint).get({ path: '' })
export const getArchiveChats = () => httpService(endpoint).get({ path: '/archive' })
export const getChatSentFiles = (id: ByIdRequest) => httpService(endpoint).get({ path: `/${id}/files` })
export const getCommonChats  = (id: ByIdRequest) => httpService(endpoint).get({ path: `/${id}/common` })
export const getChatUsers = (id: ByIdRequest) => httpService(endpoint).get({ path: `/${id}/users` })
export const getNewMessagesCount = (id: ByIdRequest) => httpService(endpoint).get({ path: `/new/${id}` })

export const createChat = (data: CreateChatRequest) => httpService(endpoint).post({ path: '', params: { data } })
export const archiveChat = (data: ChatByIdRequest) => httpService(endpoint).post({ path: '/archive', params: { data } })
export const unArchiveChat = (data: ChatByIdRequest) => httpService(endpoint).post({ path: '/unarchive', params: { data } })
export const getChatToken = (id: ByIdRequest): Promise<ChatTokenResponse> => httpService(endpoint).post({ path: `/token/${id}` })

export const uploadChatAvatar = (data: UploadAvatarRequest) => httpService(endpoint).put({ path: '/avatar', params: { data } })
export const addUsersToChat = (data: UsersByChatIdRequest) => httpService(endpoint).put({ path: '/users', params: { data } })

export const deleteChat = (data: ChatByIdRequest) => httpService(endpoint).delete({ path: '', params: { data } })
export const deleteUsersFromChat = (data: UsersByChatIdRequest) => httpService(endpoint).delete({ path: '/users', params: { data } })

export default {
  getChats,
  createChat,
  addUsersToChat,
  deleteChat,
  getChatToken
}
