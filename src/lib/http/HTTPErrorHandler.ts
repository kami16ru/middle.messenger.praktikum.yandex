import { ErrorHandler } from '../error/ErrorHandler'
import { httpErrors } from './config'

export class HTTPErrorHandler extends ErrorHandler {
  static handleHttp(error: any) {
    switch (error?.status) {
    case 400: {
      this.handle(httpErrors.SERVER_VALIDATION_ERROR)
      break
    }
    case 401: {
      this.handle(httpErrors.INVALID_REQUEST)
      break
    }
    case 404: {
      this.handle(httpErrors.NOT_FOUND)
      break
    }
    case 500: {
      this.handle(httpErrors.SERVER_ERROR)
      break
    }
    case 503: {
      this.handle(httpErrors.SERVER_ERROR)
      break
    }
    default: {
      this.handle(httpErrors.SERVER_ERROR)
      break
    }
    }
  }
}
