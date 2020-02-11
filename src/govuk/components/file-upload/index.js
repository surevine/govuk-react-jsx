import React from 'react';
import { ErrorMessage, Hint, Label } from '../..';

const FileUpload = React.forwardRef((props, ref) => {
  const {
    className,
    errorMessage,
    formGroup,
    hint,
    label,
    'aria-describedby': describedBy,
    id,
    ...attributes
  } = props;
  let hintComponent;
  let errorMessageComponent;
  let describedByValue = describedBy || '';

  if (hint) {
    const hintId = `${props.id}-hint`;
    describedByValue += ` ${hintId}`;
    hintComponent = <Hint {...props.hint} id={hintId} />;
  }

  if (errorMessage) {
    const errorId = `${id}-error`;
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
      <input
        {...attributes}
        id={id}
        ref={ref}
        className={`govuk-file-upload ${className || ''}${
          errorMessage ? ' govuk-file-upload--error' : ''
        }`}
        type="file"
        aria-describedby={describedByValue || null}
      />
    </div>
  );
});

FileUpload.displayName = 'FileUpload';

export { FileUpload };
