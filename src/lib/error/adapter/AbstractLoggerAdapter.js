import { errorMessages } from '../config'

export default class AbstractLoggerAdapter {
  constructor(message) {
    if (this.constructor === AbstractLoggerAdapter)
      throw new Error(errorMessages.classErrors.ABSTRACT_CLASS)

    this.message = message
  }

  logError() {
    throw new Error(errorMessages.classErrors.ABSTRACT_CLASS_METHOD)
  }
}
