import React from 'react';
import { Label, Hint, ErrorMessage } from '../..';

function Input(props) {
  const {
    className,
    'aria-describedby': describedBy,
    errorMessage,
    formGroup,
    hint,
    label,
    name,
    id,
    customRef,
    autofocus,
    ...attributes
  } = props;

  let describedByValue = describedBy || '';
  let hintComponent;
  let errorMessageComponent;

  if (hint) {
    const hintId = `${id}-hint`;
    describedByValue += ` ${hintId}`;
    hintComponent = <Hint {...hint} id={hintId} />;
  }

  if (errorMessage) {
    const errorId = id ? `${id}-error` : '';
    describedByValue += ` ${errorId}`;
    errorMessageComponent = <ErrorMessage {...errorMessage} id={errorId} />;
  }

  return (
    <div
      className={`govuk-form-group ${formGroup?.className || ''} ${
        errorMessage ? 'govuk-form-group--error' : ''
      } `}
    >
      <Label {...label} htmlFor={id} />
      {hintComponent}
      {errorMessageComponent}
      <input
        id={id}
        autoFocus={autofocus}
        className={`govuk-input ${className || ''} ${
          errorMessage ? ' govuk-input--error' : ''
        }`}
        name={name || id}
        ref={customRef}
        aria-describedby={describedByValue || null}
        {...attributes}
      />
    </div>
  );
}

Input.defaultProps = {
  type: 'text',
};

export { Input };
