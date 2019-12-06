import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '../../../utils/Link'

function BackLink(props) {
  const contents = props.html || props.text

  return (
    <Link
      classes={`govuk-back-link ${props.classes}`}
      attributes={props.attributes}
      href={props.href}
      to={props.to}
    >
      {contents}
    </Link>
  )
}

BackLink.defaultProps = {
  href: '/',
  text: 'Back',
  classes: ''
}

BackLink.propTypes = {
  attributes: PropTypes.object,
  classes: PropTypes.string,
  href: PropTypes.string,
  html: PropTypes.node,
  text: PropTypes.node,
  to: PropTypes.string
}

export { BackLink }
