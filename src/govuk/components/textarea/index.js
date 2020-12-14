import React from 'react';

import { Label, Hint, ErrorMessage } from '../..';

const Textarea = React.forwardRef((props, ref) => {
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
        ref={ref}
        className={`govuk-textarea${
          errorMessage ? ' govuk-textarea--error' : ''
        } ${className || ''}`}
        aria-describedby={describedByValue.trim() || null}
      />
    </div>
  );
});

Textarea.displayName = 'Textarea';

Textarea.defaultProps = {
  'aria-describedby': '',
  rows: 5,
  id: '',
  name: '',
};

export { Textarea };
