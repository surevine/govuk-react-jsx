import React from 'react';
import { Label, Hint, ErrorMessage } from '../..';

const Select = React.forwardRef((props, ref) => {
  const {
    className,
    'aria-describedby': describedBy,
    errorMessage,
    formGroup,
    hint,
    id,
    items,
    label,
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

  const options = items.map((option, index) => {
    const { reactListKey, children, ...optionAttributes } = option;
    return (
      <option {...optionAttributes} key={reactListKey || index}>
        {children}
      </option>
    );
  });

  return (
    <div
      className={`govuk-form-group${
        errorMessage ? ' govuk-form-group--error' : ''
      } ${formGroup?.className || ''}`}
    >
      <Label {...label} htmlFor={id} />
      {hintComponent}
      {errorMessageComponent}
      <select
        className={`govuk-select ${className || ''}${
          errorMessage ? ' govuk-select--error' : ''
        }`}
        id={id}
        ref={ref}
        aria-describedby={describedByValue || null}
        {...attributes}
      >
        {options}
      </select>
    </div>
  );
});

Select.displayName = 'Select';

export { Select };
