import React from 'react'
import { Hint } from '../'
import { ErrorMessage } from '../'
import { Fieldset } from '../'
import { Input } from '../'

function DateInput(props) {
  const {
    className,
    errorMessage,
    fieldset,
    formGroup,
    hint,
    id,
    items,
    namePrefix,
    name,
    ...attributes
  } = props

  let describedBy = fieldset?.describedBy || ''
  let hintComponent
  let errorMessageComponent
  let dateInputItems = []

  if (hint) {
    const hintId = `${id}-hint`
    describedBy += ` ${hintId}`
    hintComponent = <Hint id={hintId} {...hint} />
  }

  if (errorMessage) {
    const errorId = id ? `${id}-error` : ''
    describedBy += ` ${errorId}`
    errorMessageComponent = <ErrorMessage id={errorId} {...errorMessage} />
  }
  if (items) {
    dateInputItems = items
  } else {
    dateInputItems = [
      {
        name: 'day',
        className: 'govuk-input--width-2',
        type: 'text'
      },
      {
        name: 'month',
        className: 'govuk-input--width-2',
        type: 'text'
      },
      {
        name: 'year',
        className: 'govuk-input--width-4',
        type: 'text'
      }
    ]
  }

  const itemComponents = dateInputItems.map((item, index) => (
    <div key={item.reactListKey || index} className="govuk-date-input__item">
      <Input
        {...item}
        label={{
          children: item.label
            ? item.label.charAt(0).toUpperCase() + item.label.slice(1)
            : item.name.charAt(0).toUpperCase() + item.name.slice(1),
          className: 'govuk-date-input__label'
        }}
        id={item.id ? item.id : `${id}-${item.name}`}
        className={`govuk-date-input__input ${item.className || ''}`}
        name={props.namePrefix ? `${props.namePrefix}-${item.name}` : item.name}
        type="number"
        pattern={item.pattern ? item.pattern : '[0-9]*'}
      />
    </div>
  ))
  const innerHtml = (
    <>
      {hintComponent}
      {errorMessageComponent}
      <div
        className={`govuk-date-input ${className || ''}`}
        {...attributes}
        id={id}
      >
        {itemComponents}
      </div>
    </>
  )

  return (
    <div
      className={`govuk-form-group${
        errorMessage ? ' govuk-form-group--error' : ''
      } ${formGroup?.className || ''}`}
    >
      {props.fieldset ? (
        <Fieldset aria-describedby={describedBy} role="group" {...fieldset}>
          {innerHtml}
        </Fieldset>
      ) : (
        <>{innerHtml}</>
      )}
    </div>
  )
}

export { DateInput }
