export interface IHTTPTransport  {
  request(url: string, params: ParamsWithoutMethod): PromiseLike<unknown>
}

export enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export type RequestData = Record<string, string | number>;

export type RequestParams = {
  method: METHODS
  timeout?: number
  data?: unknown
  headers?: Record<string, string>
};

export type RequestOptions = {
  url: string
  params?: ParamsWithoutMethod
}

export type ParamsWithoutMethod = Omit<RequestParams, 'method'>
