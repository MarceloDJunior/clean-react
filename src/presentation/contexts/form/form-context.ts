import { createContext } from 'react'

export type FormContextProps = {
  isLoading: boolean
  errorMessage: string
}

export const formInitialState: FormContextProps = {
  isLoading: false,
  errorMessage: '',
}

export default createContext(formInitialState)
