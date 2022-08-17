import HTTPTransport from '../lib/http/HTTPTransport'
import { RequestOptions } from '../lib/http/types'

const httpTransport = new HTTPTransport()

export const httpService = {
  get: (options: RequestOptions) => httpTransport.get(options),
  post: (options: RequestOptions) => httpTransport.post(options),
  put: (options: RequestOptions) => httpTransport.put(options),
  delete: (options: RequestOptions) => httpTransport.delete(options)
}
