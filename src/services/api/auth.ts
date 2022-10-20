import { httpService } from '../httpService'

const endpoint = '/auth'

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

export const whoAmI = () => httpService(endpoint).get({ path: '/user' })

export const signUp = (data: SignUpRequest) => httpService(endpoint).post({ path: '/signup', params: { data } })
export const signIn = (data: SignInRequest) => httpService(endpoint).post({ path: '/signin', params: { data } })
export const logout = () => httpService(endpoint).post({ path: '/logout' })
