import { ValidationBuilder } from '@/validation/builder/validation-builder'
import { EmailValidation, RequiredFieldValidation } from '@/validation/validators'

describe('ValidationBuilder', () => {
  test('Sould return RequiredFieldValidation', () => {
    const validations = ValidationBuilder.field('any_field').required().build()
    expect(validations).toEqual([new RequiredFieldValidation('any_field')])
  })

  test('Sould return EmailValidation', () => {
    const validations = ValidationBuilder.field('any_field').email().build()
    expect(validations).toEqual([new EmailValidation('any_field')])
  })
})
