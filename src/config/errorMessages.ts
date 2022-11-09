import { ErrorMessagesConfig } from '../lib/error/types'
import { httpErrors } from '../lib/http/config'
import  { wsErrors } from '../lib/chat/config'

export enum arrayErrors {
  NO_ITEMS_TO_ITERATE = 'No items to iterate!'
}

export enum classErrors {
  ABSTRACT_CLASS = 'Abstract class cannot be created!',
  ABSTRACT_CLASS_METHOD = 'Abstract class method must be implemented!',
  NOT_INSTANCE_OF = 'Not instance of class!',
  INVALID_CONSTRUCTOR_ARGS = 'Invalid constructor arguments!'
}

export const errorMessages: ErrorMessagesConfig = {
  arrayErrors,
  classErrors,
  httpErrors,
  wsErrors,
  DEFAULT_MESSAGE: 'Unhandled error'
}
