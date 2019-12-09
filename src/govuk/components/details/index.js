import React from 'react'

function Details(props) {
  const {
    className,
    html,
    text,
    summaryHtml,
    summaryText,
    ...attributes
  } = props
  return (
    <details
      className={`govuk-details ${className || ''}`}
      {...attributes}
      data-module="govuk-details"
    >
      <summary className="govuk-details__summary">
        <span className="govuk-details__summary-text">
          {summaryHtml || summaryText}
        </span>
      </summary>
      <div className="govuk-details__text">{html || text}</div>
    </details>
  )
}

export { Details }
