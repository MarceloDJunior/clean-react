import { createContext } from 'react'

export type FormContextProps = {
  isLoading: boolean
  errorMessage: string
  isFormInvalid: boolean
}

export const formInitialState: FormContextProps = {
  isLoading: false,
  errorMessage: '',
  isFormInvalid: false,
}

export default createContext(formInitialState)
