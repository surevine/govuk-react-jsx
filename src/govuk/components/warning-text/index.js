import React from 'react'
import PropTypes from 'prop-types'

function WarningText(props) {
  return (
    <div
      className={`govuk-warning-text ${props.classes}`}
      {...props.attributes}
    >
      <span className="govuk-warning-text__icon" aria-hidden="true">
        !
      </span>
      <strong className="govuk-warning-text__text">
        <span className="govuk-warning-text__assistive">
          {props.iconFallbackText}
        </span>
        {props.html || props.text}
      </strong>
    </div>
  )
}

WarningText.defaultProps = {
  classes: '',
  attributes: {}
}

WarningText.propTypes = {
  attributes: PropTypes.object,
  classes: PropTypes.string,
  html: PropTypes.node,
  iconFallbackText: PropTypes.node.isRequired,
  text: PropTypes.node
}

export { WarningText }
