import React from 'react'
import { Label } from '../../'
import { Hint } from '../../'
import { ErrorMessage } from '../../'

function Select(props) {
  const {
    className,
    'aria-describedby': describedBy,
    errorMessage,
    formGroup,
    hint,
    id,
    items,
    label,
    ...attributes
  } = props

  let describedByValue = describedBy || ''
  let hintComponent
  let errorMessageComponent

  if (hint) {
    const hintId = `${id}-hint`
    describedByValue += ` ${hintId}`
    hintComponent = <Hint id={hintId} {...hint} />
  }

  if (errorMessage) {
    const errorId = id ? `${id}-error` : ''
    describedByValue += ` ${errorId}`
    errorMessageComponent = <ErrorMessage id={errorId} {...errorMessage} />
  }

  const options = items.map((option, index) => (
    <option
      key={option.reactListKey || index}
      value={option.value}
      disabled={option.disabled}
    >
      {option.children}
    </option>
  ))

  return (
    <div
      className={`govuk-form-group${
        errorMessage ? ' govuk-form-group--error' : ''
      } ${formGroup?.className || ''}`}
    >
      <Label {...label} htmlFor={id} />
      {hintComponent}
      {errorMessageComponent}
      <select
        className={`govuk-select ${className || ''}${
          errorMessage ? ' govuk-select--error' : ''
        }`}
        id={id}
        aria-describedby={describedByValue || null}
        {...attributes}
      >
        {options}
      </select>
    </div>
  )
}

export { Select }
