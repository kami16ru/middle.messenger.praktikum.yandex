import { EventBus } from '../dom/EventBus'
import { ErrorHandler } from '../error/ErrorHandler'
import { wsErrors } from './config'

export enum WSTransportEvents {
  Connected = 'connected',
  Error = 'error',
  Message = 'message',
  Close = 'close',
}

export default class WSTransport extends EventBus {
  private socket: WebSocket | null = null;
  private pingInterval = 0;

  constructor(private url: string) {
    super()
  }

  public send(data: unknown) {
    if (!this.socket) {
      throw new Error('Socket is not connected')
    }

    this.socket.send(JSON.stringify(data))
  }

  public connect(): Promise<void> {
    this.socket = new WebSocket(this.url)

    this.subscribe(this.socket)

    this.setupPing()

    return new Promise((resolve) => {
      this.on(WSTransportEvents.Connected, () => {
        resolve()
      })
    })
  }

  public close() {
    this.socket?.close()
  }

  private setupPing() {
    // eslint-disable-next-line
    // @ts-ignore
    this.pingInterval = setInterval(() => {
      this.send({ type: 'ping' })
    }, 5000)

    this.on(WSTransportEvents.Close, () => {
      clearInterval(this.pingInterval)

      this.pingInterval = 0
    })
  }

  private subscribe(socket: WebSocket) {
    socket.addEventListener('open', () => {
      this.emit(WSTransportEvents.Connected)
      console.log('socket open')
    })
    socket.addEventListener(WSTransportEvents.Close, () => {
      this.emit(WSTransportEvents.Close)
      console.log('socket close')
    })

    socket.addEventListener(WSTransportEvents.Error, (e) => {
      this.emit(WSTransportEvents.Error, e)
    })

    socket.addEventListener(WSTransportEvents.Message, (message) => {
      if (!message.data) {
        ErrorHandler.handle(wsErrors.MESSAGE_ERROR)

        return
      }

      try {
        const data = JSON.parse(message.data)

        if (data.type && data.type === 'pong') {
          return
        }

        this.emit(WSTransportEvents.Message, data)
      } catch (e) {
        ErrorHandler.handle(wsErrors.MESSAGE_ERROR)
      }
    })
  }
}
