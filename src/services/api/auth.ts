import { httpService } from '../httpService'

const endpoint = '/auth'

export interface SignInData {
  login: string;
  password: string;
}

export interface SignUpData {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export interface User {
  id: number;
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
  avatar: string;
}

export const signUp = (data: SignUpData) => httpService(endpoint).post({ path: '/signup', params: { data } })
export const signIn = (data: SignInData) => httpService(endpoint).post({ path: '/signin', params: { data } })
export const whoAmI = () => httpService(endpoint).get({ path: '/user' })
export const logout = () => httpService(endpoint).post({ path: '/logout' })
