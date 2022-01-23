import { ValidationBuilder } from '@/validation/builder/validation-builder'
import { RequiredFieldValidation } from '@/validation/validators'

describe('ValidationBuilder', () => {
  test('Sould return RequiredFiedValidation', () => {
    const validations = ValidationBuilder.field('any_field').required().build()
    expect(validations).toEqual([new RequiredFieldValidation('any_field')])
  })
})
