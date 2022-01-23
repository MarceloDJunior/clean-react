import { makeLoginValidation } from '@/main/factories/pages/login/login-validation-factory'
import { ValidationBuilder } from '@/validation/builder/validation-builder'
import { ValidationComposite } from '@/validation/validators'

describe('LoginValidationFactory', () => {
  test('Should make ValidationComposite with correct validation', () => {
    const composite = makeLoginValidation()
    expect(composite).toEqual(ValidationComposite.build([
      ...ValidationBuilder.field('email').required().email().build(),
      ...ValidationBuilder.field('password').required().min(5).build()
    ]))
  })
})
