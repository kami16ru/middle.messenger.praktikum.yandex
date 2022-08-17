import { errorMessages } from '../config'
import { ErrorMessage } from '../types'

export default abstract class AbstractLoggerAdapter {
  message

  protected constructor(message: ErrorMessage) {
    if (this.constructor === AbstractLoggerAdapter)
      throw new Error(errorMessages.classErrors.ABSTRACT_CLASS)

    this.message = message
  }

  logError() {
    throw new Error(errorMessages.classErrors.ABSTRACT_CLASS_METHOD)
  }
}
