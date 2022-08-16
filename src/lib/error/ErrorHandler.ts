import { appMode } from '../../config/app'
import ErrorLoggerBuilder from './ErrorLoggerBuilder'

export default class ErrorHandler {
  static handle(error: Error | string) {
    if (appMode === 'development') {
      (new ErrorLoggerBuilder({ error }))
        .toConsoleLogAdapter()
        .toAlert()
        .build()
    }
  }
}
