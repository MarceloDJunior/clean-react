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
    <div
      data-testid={`${props.name}-wrap`}
      className={styles.inputWrap}
      data-status={props.error ? 'invalid' : 'valid'}
    >
      <input
        {...props}
        placeholder=" "
        title={props.error || undefined}
        data-testid={props.name}
        readOnly
        onFocus={enableInput}
        ref={inputRef}
      />
      <label
        data-testid={`${props.name}-label`}
        title={props.error || undefined}
        onClick={() => inputRef.current?.focus()}
      >
        {props.placeholder}
      </label>
    </div>
  )
}

export default Input
