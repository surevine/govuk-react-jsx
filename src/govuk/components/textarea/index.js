import React from 'react'
import PropTypes from 'prop-types'
import { Label } from '../'
import { Hint } from '../'
import { ErrorMessage } from '../'

function Textarea(props) {
  let { describedBy } = props
  let hint
  let errorMessage

  if (props.hint) {
    const hintId = `${props.id}-hint`
    describedBy += ` ${hintId}`
    hint = <Hint id={hintId} {...props.hint} />
  }

  if (props.errorMessage) {
    const errorId = props.id ? `${props.id}-error` : ''
    describedBy += ` ${errorId}`
    errorMessage = <ErrorMessage id={errorId} {...props.errorMessage} />
  }

  return (
    <div
      className={`govuk-form-group${
        props.errorMessage ? ' govuk-form-group--error' : ''
      } ${(props.formGroup && props.formGroup.classes) || ''}`}
    >
      <Label {...props.label} for={props.id} />
      {hint}
      {errorMessage}
      <textarea
        className={`govuk-textarea${
          props.errorMessage ? ' govuk-textarea--error' : ''
        } ${props.classes}`}
        id={props.id}
        defaultValue={props.value}
        name={props.name}
        rows={props.rows}
        aria-describedby={describedBy.trim() || null}
        autoComplete={props.autocomplete}
        {...props.attributes}
      />
    </div>
  )
}

Textarea.defaultProps = {
  describedBy: '',
  rows: 5,
  classes: ''
}

Textarea.propTypes = {
  attributes: PropTypes.object,
  autocomplete: PropTypes.string,
  classes: PropTypes.string,
  describedBy: PropTypes.string,
  errorMessage: PropTypes.object,
  formGroup: PropTypes.object,
  hint: PropTypes.object,
  id: PropTypes.string,
  label: PropTypes.object,
  name: PropTypes.string,
  rows: PropTypes.number,
  value: PropTypes.string
}

export { Textarea }
