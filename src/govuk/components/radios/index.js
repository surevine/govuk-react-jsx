import React, { useEffect } from 'react'
import RadiosJS from 'govuk-frontend/govuk/components/radios/radios'
import PropTypes from 'prop-types'
import { ErrorMessage } from '../'
import { Fieldset } from '../'
import { Hint } from '../'
import { Label } from '../'

function Radios(props) {
  let describedBy =
    props.fieldset && props.fieldset.describedBy
      ? props.fieldset.describedBy
      : ''
  let hint
  let errorMessage
  const radioRef = React.createRef()

  useEffect(() => {
    new RadiosJS(radioRef.current).init()
  }, [])

  const idPrefix = props.idPrefix ? props.idPrefix : props.name

  if (props.hint) {
    const hintId = `${idPrefix}-hint`
    describedBy += ` ${hintId}`

    hint = <Hint id={hintId} {...props.hint} aria-describedby={describedBy} />
  }

  // Find out if we have any conditional items
  const isConditional = !!props.items.find(
    item => item.conditional && item.conditional.html
  )
  const hasFieldset = !!props.fieldset

  if (props.errorMessage) {
    const errorId = `${idPrefix}-error`
    describedBy += ` ${errorId}`
    errorMessage = <ErrorMessage id={errorId} {...props.errorMessage} />
  }

  const innerHtml = (
    <>
      {hint}
      {errorMessage}

      <div
        className={`govuk-radios ${props.classes}${
          isConditional ? ' govuk-radios--conditional' : ''
        }`}
        {...props.attributes}
        ref={radioRef}
        data-module={isConditional ? 'govuk-radios' : null}
      >
        {props.items.map((item, index) => {
          const idSuffix = `-${index + 1}`
          const id = item.id
            ? item.id
            : `${idPrefix}${index === 0 ? '' : idSuffix}`
          const name = item.name ? item.name : props.name
          const key = item.reactListKey || index
          const conditionalId =
            item.conditional && item.conditional.html
              ? `conditional-${id}`
              : null
          const itemHintId = `${id}-item-hint`

          let itemDescribedBy = ''

          if (!hasFieldset) {
            itemDescribedBy = describedBy
          }

          if (item.hint) {
            itemDescribedBy += ` ${itemHintId}`
          }

          if (item.divider) {
            return (
              <div key={key} className="govuk-radios__divider">
                {item.divider}
              </div>
            )
          }

          return (
            <React.Fragment key={key}>
              <div className="govuk-radios__item">
                <input
                  className="govuk-radios__input"
                  id={id}
                  name={name}
                  type="radio"
                  value={item.value}
                  defaultChecked={item.checked}
                  data-aria-controls={conditionalId}
                  aria-describedby={itemDescribedBy || null}
                  disabled={item.disabled}
                  {...item.attributes}
                />
                <Label
                  text={item.text || item.html}
                  classes="govuk-radios__label"
                  for={id}
                />
                {item.hint ? (
                  <Hint
                    classes="govuk-radios__hint"
                    {...item.hint}
                    id={itemHintId}
                  />
                ) : (
                  ''
                )}
              </div>

              {item.conditional && item.conditional.html ? (
                <div
                  className={`govuk-radios__conditional ${
                    item.checked ? '' : 'govuk-radios__conditional--hidden'
                  }`}
                  id={conditionalId}
                >
                  {item.conditional.html}
                </div>
              ) : (
                ''
              )}
            </React.Fragment>
          )
        })}
      </div>
    </>
  )

  return (
    <div
      className={`govuk-form-group${
        props.errorMessage ? ' govuk-form-group--error' : ''
      } ${(props.formGroup && props.formGroup.classes) || ''}`}
    >
      {hasFieldset ? (
        <Fieldset describedBy={describedBy} {...props.fieldset}>
          {innerHtml}
        </Fieldset>
      ) : (
        innerHtml
      )}
    </div>
  )
}

Radios.defaultProps = {
  classes: ''
}

Radios.propTypes = {
  attributes: PropTypes.object,
  classes: PropTypes.string,
  errorMessage: PropTypes.object,
  fieldset: PropTypes.object,
  formGroup: PropTypes.object,
  hint: PropTypes.object,
  idPrefix: PropTypes.string,
  items: PropTypes.array,
  name: PropTypes.string
}

export { Radios }
