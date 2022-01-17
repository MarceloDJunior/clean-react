import { createContext } from 'react'

export type FormContextProps = {
  isLoading: boolean
  email: string
  errorMessage: string
  emailError: string
  passwordError: string
}

export const formInitialState: FormContextProps = {
  isLoading: false,
  email: '',
  errorMessage: '',
  emailError: 'Campo obrigatório',
  passwordError: 'Campo obrigatório'
}

export default createContext(formInitialState)
