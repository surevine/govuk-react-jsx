import React from 'react';

import { Label, Hint, ErrorMessage } from '../..';

function Textarea(props) {
  const {
    className,
    'aria-describedby': describedBy,
    errorMessage,
    formGroup,
    hint,
    label,
    id,
    ...attributes
  } = props;

  let describedByValue = describedBy;
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
      className={`govuk-form-group${
        errorMessage ? ' govuk-form-group--error' : ''
      } ${formGroup?.className || ''}`}
    >
      <Label {...label} htmlFor={id} />
      {hintComponent}
      {errorMessageComponent}
      <textarea
        {...attributes}
        id={id}
        className={`govuk-textarea${
          errorMessage ? ' govuk-textarea--error' : ''
        } ${className || ''}`}
        aria-describedby={describedByValue.trim() || null}
      />
    </div>
  );
}

Textarea.defaultProps = {
  'aria-describedby': '',
  rows: 5,
};

export { Textarea };
