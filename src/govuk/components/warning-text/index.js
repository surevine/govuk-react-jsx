import React from 'react'

function WarningText(props) {
  const { className, iconFallbackText, html, text, ...attributes } = props

  return (
    <div className={`govuk-warning-text ${className || ''}`} {...attributes}>
      <span className="govuk-warning-text__icon" aria-hidden="true">
        !
      </span>
      <strong className="govuk-warning-text__text">
        <span className="govuk-warning-text__assistive">
          {iconFallbackText}
        </span>
        {html || text}
      </strong>
    </div>
  )
}

export { WarningText }
