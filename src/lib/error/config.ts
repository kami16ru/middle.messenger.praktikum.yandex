import { ErrorMessagesConfig } from './types'

export const errorMessages: ErrorMessagesConfig = {
  arrayErrors: {
    NO_ITEMS_TO_ITERATE: 'No items to iterate!'
  },
  classErrors: {
    ABSTRACT_CLASS: 'Abstract class cannot be created!',
    ABSTRACT_CLASS_METHOD: 'Abstract class method must be implemented!',
    NOT_INSTANCE_OF: 'Not instance of class!',
    INVALID_CONSTRUCTOR_ARGS: 'Invalid constructor arguments!'
  },
  fetchErrors: {
    NOT_FOUND: '404 not found'
  },
  DEFAULT_MESSAGE: 'Unhandled error'
}
