import React from 'react'

function Tag(props) {
  const { children, className, ...attributes } = props

  return (
    <strong className={`govuk-tag ${className || ''}`} {...attributes}>
      {children}
    </strong>
  )
}

export { Tag }
