import { Validation } from '@/presentation/protocols/validation'

export class ValidationStub implements Validation {
  errorMessage: string | null = null

  validate (_fieldName: string, _fieldValue: string): string | null {
    return this.errorMessage
  }
}
