import React from 'react'

import { Label } from '../'
import { Hint } from '../'
import { ErrorMessage } from '../'

function Textarea(props) {
  const {
    className,
    'aria-describedby': describedBy,
    errorMessage,
    formGroup,
    hint,
    label,
    ...attributes
  } = props

  let { describedByValue } = describedBy
  let hintComponent
  let errorMessageComponent

  if (props.hint) {
    const hintId = `${props.id}-hint`
    describedByValue += ` ${hintId}`
    hintComponent = <Hint id={hintId} {...props.hint} />
  }

  if (props.errorMessage) {
    const errorId = props.id ? `${props.id}-error` : ''
    describedByValue += ` ${errorId}`
    errorMessageComponent = (
      <ErrorMessage id={errorId} {...props.errorMessage} />
    )
  }

  return (
    <div
      className={`govuk-form-group${
        errorMessage ? ' govuk-form-group--error' : ''
      } ${formGroup?.classes || ''}`}
    >
      <Label {...label} htmlFor={id} />
      {hintComponent}
      {errorMessageComponent}
      <textarea
        className={`govuk-textarea${
          errorMessage ? ' govuk-textarea--error' : ''
        } ${className}`}
        aria-describedby={describedByValue.trim() || null}
        {...attributes}
      />
    </div>
  )
}

Textarea.defaultProps = {
  describedBy: '',
  rows: 5
}

export { Textarea }
