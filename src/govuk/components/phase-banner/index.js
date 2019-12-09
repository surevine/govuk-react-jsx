import React from 'react'
import PropTypes from 'prop-types'
import { Tag } from '../'

function PhaseBanner(props) {
  const { className, tag, html, text, ...attributes } = props
  return (
    <div className={`govuk-phase-banner ${className}`} {...attributes}>
      <p className="govuk-phase-banner__content">
        <Tag
          {...tag}
          classes={`govuk-phase-banner__content__tag ${tag?.classes || ''}`}
        />

        <span className="govuk-phase-banner__text">{html || text}</span>
      </p>
    </div>
  )
}

export { PhaseBanner }
