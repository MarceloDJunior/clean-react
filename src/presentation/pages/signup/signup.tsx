import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { LoginHeader, Footer, Input, FormStatus } from '@/presentation/components'
import FormContext, {
  FormContextProps,
  formInitialState,
} from '@/presentation/contexts/form/form-context'

import styles from './signup-styles.scss'

export const SignUp: React.FC = () => {
  const [state, _] = useState<FormContextProps>(formInitialState)
  return (
    <div className={styles.signup}>
      <LoginHeader />
      <FormContext.Provider value={state}>
        <form className={styles.form}>
          <h2>Criar conta</h2>
          <Input type="text" name="name" placeholder="Digite seu nome" />
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input type="password" name="password" placeholder="Digite sua senha" />
          <Input type="password" name="passwordConfirmation" placeholder="Digite sua senha" />
          <button type="submit" className={styles.submit}>
            Entrar
          </button>
          <Link to="/login" className={styles.link}>
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
