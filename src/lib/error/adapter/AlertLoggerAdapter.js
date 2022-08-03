import AbstractLoggerAdapter from './AbstractLoggerAdapter'

export default class AlertLoggerAdapter extends AbstractLoggerAdapter {
  constructor(message) {
    super(message)
  }
  logError() {
    window.alert(this.message)
  }

}
