import ErrorHandler from '../error/ErrorHandler'
import { RequestData, METHODS, RequestParams, IHTTPTransport, RequestOptions } from './types'

function queryStringify(data: RequestData) {
  if (typeof data !== 'object') {
    ErrorHandler.handle('Data must be object')
  }

  const keys = Object.keys(data)

  return keys.reduce((result, key, index) => {
    return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`
  }, '?')
}

class HTTPTransport implements IHTTPTransport {
  public get = ({ url, params = {} }: RequestOptions) => {
    return this.request(url, { ...params, method: METHODS.GET })
  }

  public post = ({ url, params = {} }: RequestOptions) => {
    return this.request(url, { ...params, method: METHODS.POST })
  }

  public put = ({ url, params = {} }: RequestOptions) => {
    return this.request(url, { ...params, method: METHODS.PUT })
  }

  public patch = ({ url, params = {} }: RequestOptions) => {
    return this.request(url, { ...params, method: METHODS.PATCH })
  }

  public delete = ({ url, params = {} }: RequestOptions) => {
    return this.request(url, { ...params, method: METHODS.DELETE })
  }

  request = (url: string, params: RequestParams) => {
    const {
      method = METHODS.GET,
      headers = {},
      data,
      timeout = 5000
    } = params

    const query = method === METHODS.GET ? queryStringify(data as RequestData) : ''

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
          resolve(xhr)
        }
      }

      xhr.onabort = reject
      xhr.onerror = reject
      xhr.timeout = timeout
      xhr.ontimeout = reject

      if (method === METHODS.GET || !data) {
        xhr.send()
      } else {
        xhr.send(JSON.stringify(data))
      }
    })
  }
}

export default HTTPTransport
