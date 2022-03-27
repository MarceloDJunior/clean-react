import { InvalidFieldError } from '@/validation/errors'
import { FieldValidation } from '@/validation/protocols/field-validation'

export class CompareFieldsValidation implements FieldValidation {
  constructor(readonly field: string, private readonly valueToCompare: string) {}

  validate(_: string): Error | null {
    return this.field === this.valueToCompare ? null : new InvalidFieldError()
  }
}
