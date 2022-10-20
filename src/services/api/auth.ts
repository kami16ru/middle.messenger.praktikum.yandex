import { httpService } from '../httpService'
import { RequestData } from '../../lib/http/types'

const endpoint = '/auth'

export const signUp = (data: RequestData) => httpService(endpoint).post({ path: '/signup', params: { data } })
