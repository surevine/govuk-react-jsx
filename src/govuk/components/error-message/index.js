import React from 'react';

function ErrorMessage(props) {
  const { className, children, visuallyHiddenText, ...attributes } = props;
  let visuallyHiddenTextComponent;
  if (visuallyHiddenText) {
    visuallyHiddenTextComponent = (
      <span className="govuk-visually-hidden">{visuallyHiddenText}: </span>
    );
  }

  return (
    <span className={`govuk-error-message ${className || ''}`} {...attributes}>
      {visuallyHiddenTextComponent}
      {children}
    </span>
  );
}

ErrorMessage.defaultProps = {
  visuallyHiddenText: 'Error',
};

export { ErrorMessage };
