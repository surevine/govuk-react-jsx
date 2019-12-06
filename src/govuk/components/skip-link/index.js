import React from 'react'
import PropTypes from 'prop-types'

function SkipLink(props) {
  return (
    <a
      href={props.href}
      className={`govuk-skip-link ${props.classes}`}
      {...props.attributes}
    >
      {props.html || props.text}
    </a>
  )
}

SkipLink.defaultProps = {
  href: '#content',
  classes: ''
}

SkipLink.propTypes = {
  attributes: PropTypes.object,
  classes: PropTypes.string,
  href: PropTypes.string,
  html: PropTypes.node,
  text: PropTypes.node
}

export { SkipLink }
