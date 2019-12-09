import React from 'react'

function SkipLink(props) {
  const { href, className, children, ...attributes } = props
  return (
    <a
      href={href}
      className={`govuk-skip-link ${className || ''}`}
      {...attributes}
    >
      {children}
    </a>
  )
}

SkipLink.defaultProps = {
  href: '#content'
}

export { SkipLink }
