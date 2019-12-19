import React, { useEffect } from 'react'
import RadiosJS from 'govuk-frontend/govuk/components/radios/radios'
import CheckboxesJS from 'govuk-frontend/govuk/components/checkboxes/checkboxes'
import { ErrorMessage } from '../govuk'
import { Fieldset } from '../govuk'
import { Hint } from '../govuk'
import { Label } from '../govuk'

function Boolean(props) {
  const {
    className,
    errorMessage,
    fieldset,
    formGroup,
    hint,
    idPrefix,
    items,
    controlType,
    name,
    onChange,
    onBlur,
    ...attributes
  } = props

  const controlRef = React.createRef()
  const idPrefixValue = idPrefix ? idPrefix : name
  let describedBy = fieldset?.describedBy ? fieldset.describedBy : ''
  let hintComponent
  let errorMessageComponent

  useEffect(() => {
    switch (controlType) {
      case 'radios':
        new RadiosJS(controlRef.current).init()
        break
      case 'checkboxes':
        new CheckboxesJS(controlRef.current).init()
        break
    }
  }, [])

  if (props.hint) {
    const hintId = `${idPrefixValue}-hint`
    describedBy += ` ${hintId}`

    hintComponent = <Hint id={hintId} {...hint} />
  }

  // Find out if we have any conditional items
  const isConditional = !!items.find(item => item.conditional?.children)
  const hasFieldset = !!props.fieldset

  if (errorMessage) {
    const errorId = `${idPrefixValue}-error`
    describedBy += ` ${errorId}`
    errorMessageComponent = <ErrorMessage id={errorId} {...errorMessage} />
  }

  const innerHtml = (
    <>
      {hintComponent}
      {errorMessageComponent}

      <div
        className={`govuk-${controlType} ${
          controlType === 'radios' && isConditional
            ? `govuk-${controlType}--conditional`
            : ''
        } ${className || ''}`}
        {...attributes}
        ref={controlRef}
        data-module={isConditional ? `govuk-${controlType}` : null}
      >
        {items.map((item, index) => {
          const {
            id,
            children,
            hint: itemHint,
            conditional: itemConditional,
            ...itemAttributes
          } = item

          const idSuffix = `-${index + 1}`
          const idValue = id
            ? id
            : `${idPrefixValue}${index === 0 ? '' : idSuffix}`
          const nameValue = item.name ? item.name : name
          const conditionalId = itemConditional?.children
            ? `conditional-${idValue}`
            : null
          const itemHintId = `${idValue}-item-hint`

          let itemDescribedBy = ''

          if (!hasFieldset) {
            itemDescribedBy = describedBy
          }

          if (itemHint) {
            itemDescribedBy += ` ${itemHintId}`
          }

          if (item.divider) {
            return (
              <div
                key={item.reactListKey || index}
                className={`govuk-${controlType}__divider`}
              >
                {item.divider}
              </div>
            )
          }

          return (
            <React.Fragment key={item.reactListKey || index}>
              <div className={`govuk-${controlType}__item`}>
                <input
                  className={`govuk-${controlType}__input`}
                  id={idValue}
                  name={nameValue}
                  type={controlType === 'radios' ? 'radio' : 'checkbox'}
                  data-aria-controls={conditionalId}
                  aria-describedby={itemDescribedBy || null}
                  onChange={onChange}
                  onBlur={onBlur}
                  {...itemAttributes}
                />
                <Label
                  children={children}
                  className={`govuk-${controlType}__label`}
                  htmlFor={idValue}
                />
                {itemHint ? (
                  <Hint
                    className={`govuk-${controlType}__hint`}
                    {...itemHint}
                    id={itemHintId}
                  />
                ) : (
                  ''
                )}
              </div>

              {itemConditional?.children ? (
                <div
                  className={`govuk-${controlType}__conditional ${
                    item.checked
                      ? ''
                      : `govuk-${controlType}__conditional--hidden`
                  }`}
                  id={conditionalId}
                >
                  {itemConditional.children}
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
        errorMessage ? ' govuk-form-group--error' : ''
      } ${formGroup?.className || ''}`}
    >
      {hasFieldset ? (
        <Fieldset aria-describedby={describedBy.trim() || null} {...fieldset}>
          {innerHtml}
        </Fieldset>
      ) : (
        innerHtml
      )}
    </div>
  )
}

export { Boolean }
