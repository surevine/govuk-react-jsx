import React from 'react'

function ErrorMessage(props) {
  const { className, html, text, visuallyHiddenText, ...attributes } = props
  let visuallyHiddenTextComponent
  if (props.visuallyHiddenText) {
    visuallyHiddenTextComponent = (
      <span className="govuk-visually-hidden">{visuallyHiddenText}</span>
    )
  }

  return (
    <span className={`govuk-error-message ${className}`} {...attributes}>
      {visuallyHiddenTextComponent}
      {html || text}
    </span>
  )
}

ErrorMessage.defaultProps = {
  visuallyHiddenText: 'Error:'
}

export { ErrorMessage }
