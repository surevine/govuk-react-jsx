import React from 'react'

function Hint(props) {
  const { className, html, text, ...attributes } = props
  return (
    <span className={`govuk-hint ${className || ''}`} {...attributes}>
      {html || text}
    </span>
  )
}
export { Hint }
