import React from 'react';

function Hint(props) {
  const { className, children, ...attributes } = props;
  return (
    <div className={`govuk-hint ${className || ''}`} {...attributes}>
      {children}
    </div>
  );
}
export { Hint };
