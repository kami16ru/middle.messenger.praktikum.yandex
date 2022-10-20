import HTTPTransport from '../lib/http/HTTPTransport'
import { RequestOptions } from '../lib/http/types'

export const httpService = (endpoint: string) => {
  const httpTransport = new HTTPTransport(endpoint)

  return {
    get: (options: RequestOptions) => httpTransport.get(options),
    post: (options: RequestOptions) => httpTransport.post(options),
    put: (options: RequestOptions) => httpTransport.put(options),
    delete: (options: RequestOptions) => httpTransport.delete(options)
  }
}
