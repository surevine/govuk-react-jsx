import React from 'react';

function Details(props) {
  const { className, children, summaryChildren, ...attributes } = props;
  return (
    <details
      className={`govuk-details ${className || ''}`}
      {...attributes}
      data-module="govuk-details"
    >
      <summary className="govuk-details__summary">
        <span className="govuk-details__summary-text">{summaryChildren}</span>
      </summary>
      <div className="govuk-details__text">{children}</div>
    </details>
  );
}

export { Details };
