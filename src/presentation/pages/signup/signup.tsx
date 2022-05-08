import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { LoginHeader, Footer, Input, FormStatus, SubmitButton } from '@/presentation/components'
import { Validation } from '@/presentation/protocols/validation'
import { AddAccount, SaveAccessToken } from '@/domain/usecases'
import FormContext, { formInitialState } from '@/presentation/contexts/form/form-context'

import styles from './signup-styles.scss'

type Props = {
  validation: Validation
  addAccount: AddAccount
  saveAccessToken: SaveAccessToken
}

export const SignUp: React.FC<Props> = ({ validation, addAccount, saveAccessToken }) => {
  const navigate = useNavigate()
  const [state, setState] = useState({
    ...formInitialState,
    isFormInvalid: true,
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
    const { name, email, password, passwordConfirmation } = state
    const formData = { name, email, password, passwordConfirmation }
    const nameError = validation.validate('name', formData) || ''
    const emailError = validation.validate('email', formData) || ''
    const passwordError = validation.validate('password', formData) || ''
    const passwordConfirmationError =
      validation.validate('passwordConfirmation', formData) || ''

    setState({
      ...state,
      nameError,
      emailError,
      passwordError,
      passwordConfirmationError,
      isFormInvalid: !!nameError || !!emailError || !!passwordError || !!passwordConfirmationError,
    })
  }, [state.name, state.email, state.password, state.passwordConfirmation])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      if (state.isLoading || state.isFormInvalid) {
        return
      }
      setState({
        ...state,
        isLoading: true,
      })
      const account = await addAccount.add({
        name: state.name,
        email: state.email,
        password: state.password,
        passwordConfirmation: state.passwordConfirmation,
      })
      if (account) {
        await saveAccessToken.save(account.accessToken)
      }
      navigate('/', { replace: true })
    } catch (error) {
      setState({
        ...state,
        isLoading: false,
        errorMessage: error.message,
      })
    }
  }

  return (
    <div className={styles.signupWrap}>
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
          <SubmitButton text="Cadastrar" className={styles.submit} />
          <Link data-testid="login-link" replace to="/login" className={styles.link}>
            Voltar para o login
          </Link>
          <FormStatus />
        </form>
      </FormContext.Provider>
      <Footer />
    </div>
  )
}

export default SignUp
