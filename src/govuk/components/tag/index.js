import React from 'react'
import PropTypes from 'prop-types'

function Tag(props) {
  return (
    <strong className={`govuk-tag ${props.classes}`} {...props.attributes}>
      {props.html || props.text}
    </strong>
  )
}

Tag.defaultProps = {
  classes: ''
}

Tag.propTypes = {
  attributes: PropTypes.object,
  classes: PropTypes.string,
  html: PropTypes.node,
  text: PropTypes.node
}

export { Tag }
