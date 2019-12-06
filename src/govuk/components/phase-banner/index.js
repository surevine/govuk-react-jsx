import React from 'react'
import PropTypes from 'prop-types'
import { Tag } from '../'

function PhaseBanner(props) {
  return (
    <div
      className={`govuk-phase-banner ${props.classes}`}
      {...props.attributes}
    >
      <p className="govuk-phase-banner__content">
        <Tag
          {...props.tag}
          classes={`govuk-phase-banner__content__tag${(props.tag &&
            props.tag.classes) ||
            ''}`}
        />

        <span className="govuk-phase-banner__text">
          {props.html || props.text}
        </span>
      </p>
    </div>
  )
}

PhaseBanner.defaultProps = {
  classes: ''
}

PhaseBanner.propTypes = {
  attributes: PropTypes.object,
  classes: PropTypes.string,
  html: PropTypes.node,
  tag: PropTypes.object,
  text: PropTypes.node
}

export { PhaseBanner }
