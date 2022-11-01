import { httpService } from '../../../services/httpService'

const authHttpService = httpService('/auth')

export interface SignInRequest {
  login: string;
  password: string;
}

export interface SignUpRequest {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export interface UserResponse {
  id: number;
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
  avatar: string;
}

export const whoAmI = (): Promise<UserResponse> => authHttpService.get({ path: '/user' })

export const signUp = (data: SignUpRequest) => authHttpService.post({ path: '/signup', params: { data } })
export const signIn = (data: SignInRequest) => authHttpService.post({ path: '/signin', params: { data } })
export const logout = () => authHttpService.post({ path: '/logout' })

export default {
  whoAmI,
  signIn,
  signUp,
  logout
}
