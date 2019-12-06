import React from 'react'
import PropTypes from 'prop-types'
import { Label } from '../'
import { Hint } from '../'
import { ErrorMessage } from '../'

function Select(props) {
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

  const selectedItem = props.items.find(item => item.selected === true)
  const defaultValue = selectedItem ? selectedItem.value : null

  const options = props.items.map((option, index) => (
    <option
      key={option.reactListKey || index}
      value={option.value}
      disabled={option.disabled}
    >
      {option.text}
    </option>
  ))

  return (
    <div
      className={`govuk-form-group${
        props.errorMessage ? ' govuk-form-group--error' : ''
      } ${(props.formGroup && props.formGroup.classes) || ''}`}
    >
      <Label {...props.label} for={props.id} />
      {hint}
      {errorMessage}
      <select
        className={`govuk-select ${props.classes}${
          props.errorMessage ? ' govuk-select--error' : ''
        }`}
        id={props.id}
        name={props.name}
        defaultValue={defaultValue}
        aria-describedby={describedBy.trim() || null}
        {...props.attributes}
      >
        {options}
      </select>
    </div>
  )
}

Select.defaultProps = {
  describedBy: '',
  classes: ''
}

Select.propTypes = {
  attributes: PropTypes.object,
  classes: PropTypes.string,
  describedBy: PropTypes.string,
  errorMessage: PropTypes.object,
  formGroup: PropTypes.object,
  hint: PropTypes.object,
  id: PropTypes.string,
  items: PropTypes.array,
  label: PropTypes.object,
  name: PropTypes.string
}

export { Select }
