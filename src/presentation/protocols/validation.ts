export interface Validation {
  validate (fieldName: any, fieldValue: string): string | null
}
