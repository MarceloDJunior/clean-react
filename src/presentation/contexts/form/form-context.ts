import { createContext } from 'react'

export type FormContextProps = {
  isLoading: boolean
  errorMessage: string
}

const initialState: FormContextProps = {
  isLoading: false,
  errorMessage: ''
}

export default createContext(initialState)
