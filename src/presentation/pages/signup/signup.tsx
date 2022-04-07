import React, { useEffect, useState } from 'react'

import { LoginHeader, Footer, Input, FormStatus } from '@/presentation/components'
import FormContext, { formInitialState } from '@/presentation/contexts/form/form-context'
import { Validation } from '@/presentation/protocols/validation'
import { AddAccount } from '@/domain/usecases'

import styles from './signup-styles.scss'

type Props = {
  validation?: Validation
  addAccount?: AddAccount
}

export const SignUp: React.FC<Props> = ({ validation, addAccount }) => {
  const [state, setState] = useState({
    ...formInitialState,
    name: '',
    nameError: '',
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
    passwordConfirmation: '',
    passwordConfirmationError: '',
  })

  useEffect(() => {
    setState({
      ...state,
      nameError: validation?.validate('name', state.name) || '',
      emailError: validation?.validate('email', state.email) || '',
      passwordError: validation?.validate('password', state.password) || '',
      passwordConfirmationError:
        validation?.validate('passwordConfirmation', state.passwordConfirmation) || '',
    })
  }, [state.name, state.email, state.password, state.passwordConfirmation])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    setState({
      ...state,
      isLoading: true,
    })
    await addAccount?.add({
      name: state.name,
      email: state.email,
      password: state.password,
      passwordConfirmation: state.passwordConfirmation,
    })
  }

  return (
    <div className={styles.signup}>
      <LoginHeader />
      <FormContext.Provider value={state}>
        <form className={styles.form} data-testid="form" onSubmit={handleSubmit}>
          <h2>Criar conta</h2>
          <Input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            error={state.nameError}
            onChange={event => setState({ ...state, name: event.target.value })}
          />
          <Input
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            error={state.emailError}
            onChange={event => setState({ ...state, email: event.target.value })}
          />
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
            error={state.passwordError}
            onChange={event => setState({ ...state, password: event.target.value })}
          />
          <Input
            type="password"
            name="passwordConfirmation"
            placeholder="Digite sua senha"
            error={state.passwordConfirmationError}
            onChange={event => setState({ ...state, passwordConfirmation: event.target.value })}
          />
          <button
            type="submit"
            data-testid="submit"
            disabled={
              !!state.nameError ||
              !!state.emailError ||
              !!state.passwordError ||
              !!state.passwordConfirmationError
            }
            className={styles.submit}
          >
            Entrar
          </button>
          <span className={styles.link}>Voltar para o login</span>
          <FormStatus />
        </form>
      </FormContext.Provider>
      <Footer />
    </div>
  )
}

export default SignUp
