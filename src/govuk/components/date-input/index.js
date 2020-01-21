import React from 'react';
import { Hint, ErrorMessage, Fieldset, Input } from '../..';

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
    onChange,
    ...attributes
  } = props;

  let describedBy = fieldset?.['aria-describedby']
    ? fieldset['aria-describedby']
    : '';

  let hintComponent;
  let errorMessageComponent;
  let dateInputItems = [];

  if (hint) {
    const hintId = `${id}-hint`;
    describedBy += ` ${hintId}`;
    hintComponent = <Hint {...hint} id={hintId} />;
  }

  if (errorMessage) {
    const errorId = id ? `${id}-error` : '';
    describedBy += ` ${errorId}`;
    errorMessageComponent = <ErrorMessage {...errorMessage} id={errorId} />;
  }
  if (items) {
    dateInputItems = items;
  } else {
    dateInputItems = [
      {
        name: 'day',
        className: 'govuk-input--width-2',
        type: 'text',
      },
      {
        name: 'month',
        className: 'govuk-input--width-2',
        type: 'text',
      },
      {
        name: 'year',
        className: 'govuk-input--width-4',
        type: 'text',
      },
    ];
  }

  const itemComponents = dateInputItems.map((item, index) => (
    <div key={item.reactListKey || index} className="govuk-date-input__item">
      <Input
        onChange={onChange}
        {...item}
        label={{
          children: item.label
            ? item.label
            : item.name.charAt(0).toUpperCase() + item.name.slice(1),
          className: 'govuk-date-input__label',
        }}
        id={item.id ? item.id : `${id}-${item.name}`}
        className={`govuk-date-input__input ${item.className || ''}`}
        name={namePrefix ? `${namePrefix}-${item.name}` : item.name}
        type="text"
        inputmode="numeric"
        pattern={item.pattern ? item.pattern : '[0-9]*'}
      />
    </div>
  ));
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
  );

  return (
    <div
      className={`govuk-form-group${
        errorMessage ? ' govuk-form-group--error' : ''
      } ${formGroup?.className || ''}`}
    >
      {fieldset ? (
        <Fieldset {...fieldset} aria-describedby={describedBy} role="group">
          {innerHtml}
        </Fieldset>
      ) : (
        <>{innerHtml}</>
      )}
    </div>
  );
}

export { DateInput };
