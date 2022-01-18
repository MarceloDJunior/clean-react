import React, { useEffect, useState } from 'react'
import { LoginHeader, Footer, Input, FormStatus } from '@/presentation/components'
import FormContext, { FormContextProps, formInitialState } from '@/presentation/contexts/form/form-context'
import styles from './login-styles.scss'
import { Validation } from '@/presentation/protocols/validation'

type Props = {
  validation?: Validation
}

const Login: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState<FormContextProps>(formInitialState)

  useEffect(() => {
    setState({
      ...state,
      emailError: validation?.validate('email', state.email) || '',
      passwordError: validation?.validate('password', state.password) || ''
    })
  }, [state.email, state.password])

  return (
    <div className={styles.login}>
      <LoginHeader />
      <FormContext.Provider value={state}>
        <form className={styles.form}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Digite seu e-mail" error={state.emailError}
            onChange={(event) => setState({ ...state, email: event.target.value })} />
          <Input type="password" name="password" placeholder="Digite sua senha" error={state.passwordError}
            onChange={(event) => setState({ ...state, password: event.target.value })} />
          <button type="submit" className={styles.submit} disabled={!!state.emailError || !!state.passwordError} data-testid="submit">Entrar</button>
          <span className={styles.link}>Criar conta</span>
          <FormStatus />
        </form>
      </FormContext.Provider>
      <Footer />
    </div>
  )
}

export default Login
