import React, { useEffect, useRef } from 'react';
import { ErrorMessage, Fieldset, Hint, Label } from '../govuk';
import omit from './omitKey';

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
    'aria-describedby': describedByProp,
    ...attributes
  } = props;

  const controlRef = useRef();
  const idPrefixValue = idPrefix || name;
  let describedBy = describedByProp || '';
  if (fieldset?.['aria-describedby']) {
    describedBy = fieldset['aria-describedby'];
  }

  let hintComponent;
  let errorMessageComponent;

  useEffect(() => {
    (async () => {
      switch (controlType) {
        case 'radios':
          if (typeof document !== 'undefined') {
            const { default: RadiosJS } = await import(
              'govuk-frontend/govuk/components/radios/radios'
            );

            new RadiosJS(controlRef.current).init();
          }
          break;
        case 'checkboxes':
          if (typeof document !== 'undefined') {
            const { default: CheckboxesJS } = await import(
              'govuk-frontend/govuk/components/checkboxes/checkboxes'
            );

            new CheckboxesJS(controlRef.current).init();
          }
          break;

        default:
      }
    })();
  }, [controlRef, controlType]);

  if (hint) {
    const hintId = `${idPrefixValue}-hint`;
    describedBy += ` ${hintId}`;

    hintComponent = <Hint {...hint} id={hintId} />;
  }

  // Find out if we have any conditional items
  const isConditional = !!items.find((item) => item.conditional?.children);
  const hasFieldset = !!fieldset;

  if (errorMessage) {
    const errorId = `${idPrefixValue}-error`;
    describedBy += ` ${errorId}`;
    errorMessageComponent = <ErrorMessage {...errorMessage} id={errorId} />;
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
            label,
            ...itemAttributes
          } = item;

          const idSuffix = `-${index + 1}`;
          const idValue =
            id || `${idPrefixValue}${index === 0 ? '' : idSuffix}`;
          const nameValue = item.name ? item.name : name;
          const conditionalId = itemConditional?.children
            ? `conditional-${idValue}`
            : null;
          const itemHintId = `${idValue}-item-hint`;

          let itemDescribedBy = '';

          if (!hasFieldset) {
            itemDescribedBy = describedBy;
          }

          if (itemHint) {
            itemDescribedBy += ` ${itemHintId}`;
          }

          if (item.divider) {
            return (
              <div
                key={item.reactListKey || index}
                className={`govuk-${controlType}__divider`}
              >
                {item.divider}
              </div>
            );
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
                  {...{
                    ...label,
                    className: `govuk-${controlType}__label ${
                      label?.className || ''
                    }`,
                    htmlFor: idValue,
                    isPageHeading: false,
                  }}
                >
                  {children}
                </Label>
                {itemHint ? (
                  <Hint
                    {...{
                      ...itemHint,
                      className: `govuk-${controlType}__hint ${
                        itemHint.className || ''
                      }`,
                    }}
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
          );
        })}
      </div>
    </>
  );

  return (
    <div
      className={`govuk-form-group${
        errorMessage ? ' govuk-form-group--error' : ''
      } ${formGroup?.className || ''}`}
    >
      {hasFieldset ? (
        <Fieldset
          {...omit(fieldset, 'role')}
          aria-describedby={describedBy.trim() || null}
        >
          {innerHtml}
        </Fieldset>
      ) : (
        innerHtml
      )}
    </div>
  );
}

export { Boolean };
