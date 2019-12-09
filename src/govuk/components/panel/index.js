import React from 'react'

function Panel(props) {
  const {
    headingLevel,
    html,
    text,
    className,
    titleHtml,
    titleText,
    ...attributes
  } = props
  const HeadingLevel = headingLevel ? `h${headingLevel}` : 'h1'

  const innerHtml = <div className="govuk-panel__body">{html || text}</div>

  return (
    <div
      className={`govuk-panel govuk-panel--confirmation ${className}`}
      {...attributes}
    >
      <HeadingLevel className="govuk-panel__title">
        {titleHtml || titleText}
      </HeadingLevel>
      {innerHtml}
    </div>
  )
}

export { Panel }
