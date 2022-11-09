import HTTPTransport from '../lib/http/HTTPTransport'
import { RequestOptions } from '../lib/http/types'

export type ByIdRequest = number

export const httpService = (endpoint: string) => {
  const httpTransport = new HTTPTransport(endpoint)

  return {
    get(options: RequestOptions) { return httpTransport.get(options) },
    post(options: RequestOptions) { return httpTransport.post(options) },
    put(options: RequestOptions) { return httpTransport.put(options) },
    delete(options: RequestOptions) { return httpTransport.delete(options) }
  }
}
