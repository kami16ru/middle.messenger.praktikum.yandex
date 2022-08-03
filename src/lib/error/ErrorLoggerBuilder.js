import ConsoleLoggerAdapter from './adapter/ConsoleLoggerAdapter'
import { errorMessages } from './config'
import AlertLoggerAdapter from './adapter/AlertLoggerAdapter'
import { isEmpty } from '../helpers/myDash'

export default class ErrorLoggerBuilder {
  constructor(options) {
    const { error } = options
    const { message } = error

    this.error = error
    this.message = message ? message : error
    this.adapters = {}
  }

  toAlert() {
    this.adapters.alertAdapter = new AlertLoggerAdapter(this.message)

    return this
  }

  toConsoleLogAdapter() {
    this.adapters.consoleLogAdapter = new ConsoleLoggerAdapter(this.error)

    return this
  }

  build() {
    if (isEmpty(this.adapters)) throw new Error(errorMessages.arrayErrors.NO_ITEMS_TO_ITERATE)

    Object.values(this.adapters).forEach((adapter) => adapter.logError())
  }
}
