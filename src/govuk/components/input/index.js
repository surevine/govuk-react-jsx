import React from 'react';
import { Label, Hint, ErrorMessage } from '../..';

const Input = React.forwardRef((props, ref) => {
  const {
    className,
    'aria-describedby': describedBy,
    errorMessage,
    formGroup,
    hint,
    label,
    name,
    id,
    prefix,
    suffix,
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

  const input = (
    <input
      ref={ref}
      id={id}
      className={`govuk-input ${className || ''} ${
        errorMessage ? ' govuk-input--error' : ''
      }`}
      name={name || id}
      aria-describedby={describedByValue || null}
      {...attributes}
    />
  );

  return (
    <div
      className={`govuk-form-group ${formGroup?.className || ''} ${
        errorMessage ? 'govuk-form-group--error' : ''
      } `}
    >
      <Label {...label} htmlFor={id} />
      {hintComponent}
      {errorMessageComponent}
      {prefix || suffix ? (
        <div className="govuk-input__wrapper">
          {prefix ? (
            <div
              aria-hidden="true"
              {...{
                ...prefix,
                className: `govuk-input__prefix ${
                  prefix.className ? prefix.className : ''
                }`,
              }}
            />
          ) : null}

          {input}

          {suffix ? (
            <div
              aria-hidden="true"
              {...{
                ...suffix,
                className: `govuk-input__suffix ${
                  suffix.className ? suffix.className : ''
                }`,
              }}
            />
          ) : null}
        </div>
      ) : (
        input
      )}
    </div>
  );
});

Input.displayName = 'Input';

Input.defaultProps = {
  type: 'text',
};

export { Input };
