import React, { useRef } from 'react'

import styles from './input-styles.scss'

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  error?: string
}

const Input: React.FC<Props> = (props: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }

  return (
    <div className={styles.inputWrap}>
      <input
        {...props}
        placeholder=" "
        data-testid={props.name}
        readOnly
        onFocus={enableInput}
        ref={inputRef}
      />
      <label onClick={() => inputRef.current?.focus()}>{props.placeholder}</label>
      <span
        data-testid={`${props.name}-status`}
        title={props.error || 'Tudo certo'}
        className={styles.status}
      >
        {props.error ? '🔴' : '🟢'}
      </span>
    </div>
  )
}

export default Input
