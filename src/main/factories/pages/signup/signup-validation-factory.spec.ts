import { makeSignUpValidation } from '@/main/factories/pages/signup/signup-validation-factory'
import { ValidationBuilder } from '@/validation/builder/validation-builder'
import { ValidationComposite } from '@/validation/validators'

describe('SignUpValidationFactory', () => {
  test('Should make ValidationComposite with correct validation', () => {
    const composite = makeSignUpValidation()
    expect(composite).toEqual(
      ValidationComposite.build([
        ...ValidationBuilder.field('name').required().min(3).build(),
        ...ValidationBuilder.field('email').required().email().build(),
        ...ValidationBuilder.field('password').required().min(5).build(),
        ...ValidationBuilder.field('passwordConfirmation').required().sameAs('password').build(),
      ])
    )
  })
})
