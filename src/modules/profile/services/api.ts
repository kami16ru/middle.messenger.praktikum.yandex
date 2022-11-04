import { httpService } from '../../../services/http.service'

const authHttpService = httpService('/user')

export interface ProfileEditRequest {
  id: number
  first_name: string
  second_name: string
  login: string
  email: string
  password: string
  phone: string
}

export interface ProfileEditPasswordRequest {
  id: number
  password: string
}

export const editProfile = (data: ProfileEditRequest) => authHttpService.put({ path: '/profile', params: { data } })
export const editPassword = (data: ProfileEditPasswordRequest) => authHttpService.post({ path: '/password', params: { data } })

export default {
  editProfile,
  editPassword
}
