import React, { useState } from 'react'
import { LoginHeader, Footer, Input, FormStatus } from '@/presentation/components'
import FormContext, { FormContextProps } from '@/presentation/contexts/form/form-context'
import styles from './login-styles.scss'

const Login: React.FC = () => {
  const [state] = useState<FormContextProps>({
    isLoading: false,
    errorMessage: '',
    emailError: 'Campo obrigatório',
    passwordError: 'Campo obrigatório'
  })

  return (
    <div className={styles.login}>
      <LoginHeader />
      <FormContext.Provider value={state}>
        <form className={styles.form}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Digite seu e-mail" error={state.emailError} />
          <Input type="password" name="password" placeholder="Digite sua senha" error={state.passwordError} />
          <button type="submit" className={styles.submit} disabled data-testid="submit">Entrar</button>
          <span className={styles.link}>Criar conta</span>
          <FormStatus />
        </form>
      </FormContext.Provider>
      <Footer />
    </div>
  )
}

export default Login
