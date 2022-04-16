import faker from 'faker'

import { ValidationBuilder } from '@/validation/builder/validation-builder'
import {
  EmailValidation,
  MinLengthValidation,
  RequiredFieldValidation,
} from '@/validation/validators'
import { CompareFieldsValidation } from '@/validation/validators/compare-fields/compare-fields-validation'

describe('ValidationBuilder', () => {
  test('Sould return RequiredFieldValidation', () => {
    const field = faker.database.column()
    const validations = ValidationBuilder.field(field).required().build()
    expect(validations).toEqual([new RequiredFieldValidation(field)])
  })

  test('Sould return EmailValidation', () => {
    const field = faker.database.column()
    const validations = ValidationBuilder.field(field).email().build()
    expect(validations).toEqual([new EmailValidation(field)])
  })

  test('Sould return MinLengthValidation', () => {
    const field = faker.database.column()
    const length = faker.datatype.number()
    const validations = ValidationBuilder.field(field).min(length).build()
    expect(validations).toEqual([new MinLengthValidation(field, length)])
  })

  test('Sould return CompareFieldsValidation', () => {
    const field = faker.database.column()
    const fieldToCompare = faker.database.column()
    const validations = ValidationBuilder.field(field).sameAs(fieldToCompare).build()
    expect(validations).toEqual([new CompareFieldsValidation(field, fieldToCompare)])
  })

  test('Should return a list of validations', () => {
    const field = faker.database.column()
    const validations = ValidationBuilder.field(field).required().min(length).email().build()
    expect(validations).toEqual([
      new RequiredFieldValidation(field),
      new MinLengthValidation(field, length),
      new EmailValidation(field),
    ])
  })
})
