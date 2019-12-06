import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import CheckboxesJS from 'govuk-frontend/govuk/components/checkboxes/checkboxes'
import { ErrorMessage } from '../'
import { Fieldset } from '../'
import { Hint } from '../'
import { Label } from '../'

function Checkboxes(props) {
  const checkboxRef = React.createRef()
  const idPrefix = props.idPrefix ? props.idPrefix : props.name
  let describedBy =
    props.fieldset && props.fieldset.describedBy
      ? props.fieldset.describedBy
      : ''
  let hint
  let errorMessage

  useEffect(() => {
    new CheckboxesJS(checkboxRef.current).init()
  }, [])

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
        className={`govuk-checkboxes ${props.classes}`}
        {...props.attributes}
        ref={checkboxRef}
        data-module={isConditional ? 'govuk-checkboxes' : null}
      >
        {props.items.map((item, index) => {
          const idSuffix = `-${index + 1}`
          const id = item.id
            ? item.id
            : `${idPrefix}${index === 0 ? '' : idSuffix}`
          const name = item.name ? item.name : props.name
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

          return (
            <React.Fragment key={item.reactListKey || index}>
              <div className="govuk-checkboxes__item">
                <input
                  className="govuk-checkboxes__input"
                  id={id}
                  name={name}
                  type="checkbox"
                  value={item.value}
                  defaultChecked={item.checked}
                  data-aria-controls={conditionalId}
                  aria-describedby={itemDescribedBy || null}
                  disabled={item.disabled}
                />
                <Label
                  text={item.text}
                  classes="govuk-checkboxes__label"
                  for={id}
                />
                {item.hint ? (
                  <Hint
                    classes="govuk-checkboxes__hint"
                    {...item.hint}
                    id={itemHintId}
                  />
                ) : (
                  ''
                )}
              </div>

              {item.conditional && item.conditional.html ? (
                <div
                  className={`govuk-checkboxes__conditional ${
                    item.checked ? '' : 'govuk-checkboxes__conditional--hidden'
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

Checkboxes.defaultProps = {
  classes: ''
}

Checkboxes.propTypes = {
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

export { Checkboxes }
