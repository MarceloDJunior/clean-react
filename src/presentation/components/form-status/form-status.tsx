import React, { useContext } from 'react'
import Spinner from '@/presentation/components/spinner/spinner'
import FormContext from '@/presentation/contexts/form/form-context'
import styles from './form-status-styles.scss'

const FormStatus: React.FC = () => {
  const { isLoading, errorMessage } = useContext(FormContext)
  return (
    <div className={styles.errorWrap} data-testid='error-wrap'>
      {isLoading && <Spinner className={styles.spinner} />}
      {errorMessage && <span data-testid='main-error' className={styles.error}>{errorMessage}</span>}
    </div>
  )
}

export default FormStatus
