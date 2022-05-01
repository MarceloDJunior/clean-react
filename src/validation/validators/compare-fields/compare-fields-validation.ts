import { InvalidFieldError } from '@/validation/errors'
import { FieldValidation } from '@/validation/protocols/field-validation'

export class CompareFieldsValidation implements FieldValidation {
  constructor(readonly field: string, private readonly fieldToCompare: string) {}

  validate(input: any): Error | null {
    if (input[this.field] === undefined || input[this.fieldToCompare] === undefined) {
      return null
    }
    return input[this.field] !== input[this.fieldToCompare] ? new InvalidFieldError() : null
  }
}
