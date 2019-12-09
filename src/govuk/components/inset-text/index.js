import React from 'react'

function InsetText(props) {
  const { className, html, text, ...attributes } = props
  return (
    <div className={`govuk-inset-text ${className || ''}`} {...attributes}>
      {html || text}
    </div>
  )
}

export { InsetText }
