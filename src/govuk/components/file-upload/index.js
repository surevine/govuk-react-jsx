import React from 'react'
import { ErrorMessage } from '../'
import { Hint } from '../'
import { Label } from '../'

function FileUpload(props) {
  const {
    className,
    errorMessage,
    formGroup,
    hint,
    label,
    describedBy,
    id,
    ...attributes
  } = props
  let hintComponent
  let errorMessageComponent
  let describedByValue = describedBy || ''

  if (hint) {
    const hintId = `${props.id}-hint`
    describedByValue += ` ${hintId}`
    hintComponent = <Hint id={hintId} {...props.hint} />
  }

  if (errorMessage) {
    const errorId = `${id}-error`
    describedByValue += ` ${errorId}`
    errorMessageComponent = <ErrorMessage id={errorId} {...errorMessage} />
  }
  return (
    <div
      className={`govuk-form-group${
        errorMessage ? ' govuk-form-group--error' : ''
      } ${formGroup?.className || ''}`}
    >
      <Label {...label} htmlFor={id} />
      {hintComponent}
      {errorMessageComponent}
      <input
        id={id}
        className={`govuk-file-upload ${className || ''}${
          errorMessage ? ' govuk-file-upload--error' : ''
        }`}
        type="file"
        aria-describedby={describedByValue || null}
        {...attributes}
      />
    </div>
  )
}

export { FileUpload }
