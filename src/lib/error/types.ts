import AbstractLoggerAdapter from './adapter/AbstractLoggerAdapter'

export interface IErrorLoggerBuilder {
  error: Error | string
  adapters: Record<string, AbstractLoggerAdapter>
}

export type ErrorLoggerBuilderOptions = {
  error: Error | string
}

// export type ErrorMessagesConfig = Record<string, Record<string, string> | string>
export type ErrorMessagesConfig = Record<string, any>

export type ErrorMessage = string | Error
