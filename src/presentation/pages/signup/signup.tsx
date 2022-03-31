import React, { useState } from 'react'

import { LoginHeader, Footer, Input, FormStatus } from '@/presentation/components'
import FormContext, { formInitialState } from '@/presentation/contexts/form/form-context'

import styles from './signup-styles.scss'

export const SignUp: React.FC = () => {
  const [state, _] = useState({
    ...formInitialState,
    nameError: 'Campo obrigatório',
    emailError: 'Campo obrigatório',
    passwordError: 'Campo obrigatório',
    passwordConfirmation: 'Campo obrigatório',
  })

  return (
    <div className={styles.signup}>
      <LoginHeader />
      <FormContext.Provider value={state}>
        <form className={styles.form}>
          <h2>Criar conta</h2>
          <Input type="text" name="name" placeholder="Digite seu nome" error={state.nameError} />
          <Input
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            error={state.emailError}
          />
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
            error={state.passwordConfirmation}
          />
          <Input
            type="password"
            name="passwordConfirmation"
            placeholder="Digite sua senha"
            error={state.nameError}
          />
          <button type="submit" data-testid="submit" disabled className={styles.submit}>
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
