import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '../../../utils/Link'

function BackLink(props) {
  const { html, text, href, to, className, ...attributes } = props
  const contents = html || text

  return (
    <Link
      {...attributes}
      className={`govuk-back-link ${className}`}
      href={href}
      to={to}
    >
      {contents}
    </Link>
  )
}

BackLink.defaultProps = {
  href: '/',
  text: 'Back'
}

BackLink.propTypes = {
  href: PropTypes.string,
  html: PropTypes.node,
  text: PropTypes.node,
  to: PropTypes.string
}

export { BackLink }
