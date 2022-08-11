import AbstractLoggerAdapter from './AbstractLoggerAdapter'

export default class ConsoleLoggerAdapter extends AbstractLoggerAdapter {
  constructor(message) {
    super(message)
  }
  logError() {
    console.log(this.message)
  }
}
