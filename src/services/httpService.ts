import HTTPTransport from '../lib/http/HTTPTransport'
import { RequestOptions } from '../lib/http/types'

export const httpService = (endpoint: string) => {
  const httpTransport = new HTTPTransport(endpoint)

  return {
    get<Response>(options: RequestOptions): Promise<Response> { return httpTransport.get(options) },
    post<Response = void>(options: RequestOptions): Promise<Response> { return httpTransport.post(options) },
    put<Response = void>(options: RequestOptions): Promise<Response> { return httpTransport.put(options) },
    delete<Response>(options: RequestOptions): Promise<Response> { return httpTransport.delete(options) }
  }
}
