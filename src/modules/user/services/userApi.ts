import { ByIdRequest, httpService } from '../../../services/http.service'

const endpoint = '/user'

export interface UserByLoginRequest {
  login: string
}

export interface UpdateUserRequest {
  first_name: string,
  second_name: string,
  display_name: string,
  login: string,
  email: string,
  phone: string
}

export interface UpdateUserAvatarRequest {
  avatar: File
}

export interface UpdateUserPasswordRequest {
  oldPassword: string
  newPassword: string
}

export const getUserById = (id: ByIdRequest) => httpService(endpoint).get({ path: `/${id}` })

export const getUserByLogin = (data: UserByLoginRequest) => httpService(endpoint).post({ path: '/search', params: { data } })

export const updateUser = (data: UpdateUserRequest) => httpService(endpoint).put({ path: '/profile', params: { data } })
export const updateUserAvatar = (data: UpdateUserAvatarRequest) => httpService(endpoint).put({ path: '/profile/avatar', params: { data } })
export const updateUserPassword = (data: UpdateUserPasswordRequest) => httpService(endpoint).put({ path: '/password', params: { data } })
