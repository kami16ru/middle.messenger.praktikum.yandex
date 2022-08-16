import AbstractLoggerAdapter from './AbstractLoggerAdapter'
import { ErrorMessage } from '../types'

export default class AlertLoggerAdapter extends AbstractLoggerAdapter {
  constructor(message: ErrorMessage) {
    super(message)
  }
  logError() {
    window.alert(this.message)
  }

}
