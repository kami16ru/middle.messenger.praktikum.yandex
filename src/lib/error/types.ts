import AbstractLoggerAdapter from './adapter/AbstractLoggerAdapter'

export interface IErrorLoggerBuilder {
  error: Error | string
  adapters: Record<string, AbstractLoggerAdapter>
}

export type ErrorLoggerBuilderOptions = {
  error: Error | string
}

export type ErrorMessagesConfig = {
  arrayErrors: Record<string, string>
  classErrors: Record<string, string>
  fetchErrors: Record<string, string>
  DEFAULT_MESSAGE: string
}

export type ErrorMessage = string | Error
