import defaultRules from '../../config/validationRules'
import { ValidatorConfig, ValidationRuleConfig } from './types'

export class Validator {
  _config
  rules
  errors: Array<unknown>

  constructor(config: ValidatorConfig) {
    this._config = config

    this.rules = defaultRules
    this.errors = []
  }

  static isDirty(value: string, rule: ValidationRuleConfig['check']) {
    return !rule(value)
  }
}
