import Entity from '../model/Entity'
import { Chat } from './types'

type ChatEntityOptions = {
  primaryKey: 'id'
  data: Chat
}

export default class ChatEntity extends Entity {
  constructor(options: ChatEntityOptions) {
    super(options)
  }
}
