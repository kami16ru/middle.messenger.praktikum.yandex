import { ErrorHandler } from '../error/ErrorHandler'
import { RequestData, METHODS, RequestParams, IHTTPTransport, RequestOptions, HTTPMethod } from './types'
import { apiBaseUrl } from '../../config/api'
import { httpErrors } from './config'

function queryStringify(data: RequestData) {
  if (typeof data !== 'object') {
    ErrorHandler.handle(httpErrors.NOT_OBJECT)
  }

  const keys = Object.keys(data)

  return keys.reduce((result, key, index) => {
    return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`
  }, '?')
}

class HTTPTransport implements IHTTPTransport {
  static API_URL = apiBaseUrl
  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = `${HTTPTransport.API_URL}${endpoint}`
  }

  public get: HTTPMethod = ({ path, params = {} }: RequestOptions) => {
    return this.request(this.endpoint + path, { ...params, method: METHODS.GET })
  }

  public post: HTTPMethod = ({ path, params = {} }: RequestOptions) => {
    return this.request(this.endpoint + path, { ...params, method: METHODS.POST })
  }

  public put: HTTPMethod = ({ path, params = {} }: RequestOptions) => {
    return this.request(this.endpoint + path, { ...params, method: METHODS.PUT })
  }

  public patch: HTTPMethod = ({ path, params = {} }: RequestOptions) => {
    return this.request(this.endpoint + path, { ...params, method: METHODS.PATCH })
  }

  public delete: HTTPMethod = ({ path, params = {} }: RequestOptions) => {
    return this.request(this.endpoint + path, { ...params, method: METHODS.DELETE })
  }

  request<Response>(url: string, params: RequestParams): Promise<Response> {
    const {
      method = METHODS.GET,
      headers = {},
      data,
      timeout = 5000
    } = params

    const query = method === METHODS.GET && !!data ? queryStringify(data as RequestData) : ''

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()

      xhr.open(method, url + query)

      Object.entries(headers).forEach(([key, value]) => {
        xhr.setRequestHeader(key, value)
      })

      xhr.onload = () => {
        if (xhr.status >= 300) {
          reject(xhr)
        } else {
          resolve(xhr.response)
        }
      }

      xhr.onabort = reject
      xhr.onerror = reject
      xhr.timeout = timeout
      xhr.ontimeout = reject

      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.setRequestHeader('Content-Security-Policy', 'default-src \'self\'')

      xhr.withCredentials = true
      xhr.responseType = 'json'

      if (method === METHODS.GET || !data) {
        xhr.send()
      } else {
        xhr.send(JSON.stringify(data))
      }
    })
  }
}

export default HTTPTransport
