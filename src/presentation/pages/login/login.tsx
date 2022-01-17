import React, { useState } from 'react'
import { LoginHeader, Footer, Input, FormStatus } from '@/presentation/components'
import FormContext, { FormContextProps } from '@/presentation/contexts/form/form-context'
import styles from './login-styles.scss'

const Login: React.FC = () => {
  const [state] = useState<FormContextProps>({
    isLoading: false,
    errorMessage: ''
  })

  return (
    <div className={styles.login}>
      <LoginHeader />
      <FormContext.Provider value={state}>
        <form className={styles.form}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input type="password" name="password" placeholder="Digite sua senha" />
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
