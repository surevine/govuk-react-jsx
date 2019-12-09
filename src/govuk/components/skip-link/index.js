import React from 'react'

function SkipLink(props) {
  const { href, className, html, text, ...attributes } = props
  return (
    <a href={href} className={`govuk-skip-link ${className}`} {...attributes}>
      {html || text}
    </a>
  )
}

SkipLink.defaultProps = {
  href: '#content'
}

export { SkipLink }
