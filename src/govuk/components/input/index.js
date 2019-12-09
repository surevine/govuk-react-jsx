import React from 'react'
import { Label } from '../'
import { Hint } from '../'
import { ErrorMessage } from '../'

function Input(props) {
  const {
    autoComplete,
    className,
    'aria-describedby': describedBy,
    errorMessage,
    formGroup,
    hint,
    label,
    name,
    ...attributes
  } = props

  let describedByValue = describedBy
  let hintComponent
  let errorMessageComponent

  if (hint) {
    const hintId = `${props.id}-hint`
    describedByValue += ` ${hintId}`
    hintComponent = <Hint id={hintId} {...props.hint} />
  }

  if (errorMessage) {
    const errorId = props.id ? `${props.id}-error` : ''
    describedByValue += ` ${errorId}`
    errorMessageComponent = (
      <ErrorMessage id={errorId} {...props.errorMessage} />
    )
  }

  return (
    <div
      className={`govuk-form-group ${formGroup?.className || ''} ${
        errorMessage ? 'govuk-form-group--error' : ''
      } `}
    >
      <Label {...label} htmlFor={props.id} />
      {hintComponent}
      {errorMessageComponent}
      <input
        className={`govuk-input ${className || ''} ${
          errorMessage ? ' govuk-input--error' : ''
        }`}
        name={name || props.id}
        aria-describedby={describedByValue || null}
        {...attributes}
      />
    </div>
  )
}

Input.defaultProps = {
  type: 'text'
}

export { Input }
