import { createContext } from 'react'

export type FormContextProps = {
  isLoading: boolean
  errorMessage: string
  emailError: string
  passwordError: string
}

const initialState: FormContextProps = {
  isLoading: false,
  errorMessage: '',
  emailError: 'Campo obrigatório',
  passwordError: 'Campo obrigatório'
}

export default createContext(initialState)
