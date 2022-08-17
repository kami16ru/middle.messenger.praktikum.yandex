import AbstractLoggerAdapter from './AbstractLoggerAdapter'
import { ErrorMessage } from '../types'

export default class ConsoleLoggerAdapter extends AbstractLoggerAdapter {
  constructor(message: ErrorMessage) {
    super(message)
  }
  logError() {
    console.log(this.message)
  }
}
