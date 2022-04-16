import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { LoginHeader, Footer, Input, FormStatus, SubmitButton } from '@/presentation/components'
import FormContext, { formInitialState } from '@/presentation/contexts/form/form-context'
import { Validation } from '@/presentation/protocols/validation'
import { Authentication, SaveAccessToken } from '@/domain/usecases'

import styles from './login-styles.scss'

type Props = {
  validation: Validation
  authentication: Authentication
  saveAccessToken: SaveAccessToken
}

export const Login: React.FC<Props> = ({ validation, authentication, saveAccessToken }: Props) => {
  const navigate = useNavigate()
  const [state, setState] = useState({
    ...formInitialState,
    isFormInvalid: true,
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
  })

  useEffect(() => {
    const { email, password } = state
    const formData = { email, password }
    const emailError = validation.validate('email', formData) || ''
    const passwordError = validation.validate('password', formData) || ''

    setState({
      ...state,
      emailError,
      passwordError,
      isFormInvalid: !!emailError || !!passwordError,
    })
  }, [state.email, state.password])

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
      const account = await authentication.auth({ email: state.email, password: state.password })
      await saveAccessToken.save(account.accessToken)
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
    <div className={styles.login}>
      <LoginHeader />
      <FormContext.Provider value={state}>
        <form data-testid="form" className={styles.form} onSubmit={handleSubmit}>
          <h2>Login</h2>
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
          <SubmitButton text="Entrar" className={styles.submit} />
          <Link data-testid="signup-link" to="/signup" className={styles.link}>
            Criar conta
          </Link>
          <FormStatus />
        </form>
      </FormContext.Provider>
      <Footer />
    </div>
  )
}

export default Login
