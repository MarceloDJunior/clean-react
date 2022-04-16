import React, { useContext } from 'react'

import FormContext from '@/presentation/contexts/form/form-context'

type Props = {
  text: string
  className?: string
}

export const SubmitButton: React.FC<Props> = ({ text, className }: Props) => {
  const state = useContext(FormContext)
  return (
    <button type="submit" className={className} disabled={state.isFormInvalid} data-testid="submit">
      {text}
    </button>
  )
}

export default SubmitButton
