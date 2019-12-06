import React from 'react'
import PropTypes from 'prop-types'

function Hint(props) {
  return (
    <span id={props.id} className={`govuk-hint ${props.classes}`}>
      {props.html || props.text}
    </span>
  )
}

Hint.defaultProps = {
  classes: ''
}

Hint.propTypes = {
  classes: PropTypes.string,
  html: PropTypes.node,
  id: PropTypes.string,
  text: PropTypes.node
}

export { Hint }
