import { RequiredFieldError } from '@/validation/errors'
import { FieldValidation } from '@/validation/protocols/field-validation'

export class RequiredFieldValidation implements FieldValidation {
  constructor (readonly field: string) { }
  validate (_value: string): Error | null {
    return new RequiredFieldError()
  }
}
