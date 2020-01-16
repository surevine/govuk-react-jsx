import React from 'react';

function Hint(props) {
  const { className, children, ...attributes } = props;
  return (
    <span className={`govuk-hint ${className || ''}`} {...attributes}>
      {children}
    </span>
  );
}
export { Hint };
