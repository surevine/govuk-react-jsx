import React from 'react'

function Tag(props) {
  const { html, text, className, ...attributes } = props

  return (
    <strong className={`govuk-tag ${className || ''}`} {...attributes}>
      {html || text}
    </strong>
  )
}

export { Tag }
