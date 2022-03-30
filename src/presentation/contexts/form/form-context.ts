import { createContext } from 'react'

export type FormContextProps = any

export const formInitialState: FormContextProps = {
  isLoading: false,
  email: '',
  password: '',
  errorMessage: '',
  emailError: '',
  passwordError: '',
}

export default createContext(formInitialState)
