import * as FormHelper from '../support/form-helper'

describe('SignUp', () => {
  beforeEach(() => {
    cy.visit('/signup')
  })

  it('Should load with correct inital state', () => {
    cy.getByTestId('name-wrap').should('have.attr', 'data-status', 'invalid')
    FormHelper.testInputStatus('name', 'Campo obrigatório!')
    cy.getByTestId('email-wrap').should('have.attr', 'data-status', 'invalid')
    FormHelper.testInputStatus('email', 'Campo obrigatório!')
    cy.getByTestId('password-wrap').should('have.attr', 'data-status', 'invalid')
    FormHelper.testInputStatus('password', 'Campo obrigatório!')
    cy.getByTestId('passwordConfirmation-wrap').should('have.attr', 'data-status', 'invalid')
    FormHelper.testInputStatus('passwordConfirmation', 'Campo obrigatório!')
    cy.getByTestId('submit').should('have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })
})
