import { FieldValidation } from '@/validation/protocols/field-validation'

export class FieldValidationSpy implements FieldValidation {
  error: Error | null = null

  constructor(readonly field: string) {}

  validate(_input: any): Error | null {
    return this.error
  }
}
