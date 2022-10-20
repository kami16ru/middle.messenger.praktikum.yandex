type EntityOptions = {
  primaryKey?: string
  data?: EntityOptionsData
}

type EntityOptionsData = Record<string, unknown>

export default class Entity {
  _fields: EntityOptionsData
  _options: Record<string, unknown>
  _primaryKey: string

  constructor(options: EntityOptions = {}) {
    const data = options.data || {}
    const primaryKey = options.primaryKey || 'id'

    this._fields = {}
    this._primaryKey = primaryKey
    if (data !== {})
      this.record(data)
  }

  record(data: EntityOptionsData) {
    this._fields = data
  }
  show() {
    return Object.assign({}, this._fields)
  }
  update(data: Record<string, unknown>) {
    if (data[this._primaryKey] !== undefined)
      if (data[this._primaryKey] !== this._fields[this._primaryKey])
        return false

    this.record(Object.assign(this.show(), data))

    return this.show()
  }
  flush() {
    this._fields = {}
  }
}
