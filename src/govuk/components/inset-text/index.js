import React from 'react';

function InsetText(props) {
  const { className, children, ...attributes } = props;
  return (
    <div className={`govuk-inset-text ${className || ''}`} {...attributes}>
      {children}
    </div>
  );
}

export { InsetText };
