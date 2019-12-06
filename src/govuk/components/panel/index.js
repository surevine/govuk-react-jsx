import React from 'react'
import PropTypes from 'prop-types'

function Panel(props) {
  const HeadingLevel = props.headingLevel ? `h${props.headingLevel}` : 'h1'

  const innerHtml = (
    <div className="govuk-panel__body">{props.html || props.text}</div>
  )

  return (
    <div
      className={`govuk-panel govuk-panel--confirmation ${props.classes}`}
      {...props.attributes}
    >
      <HeadingLevel className="govuk-panel__title">
        {props.titleHtml || props.titleText}
      </HeadingLevel>
      {innerHtml}
    </div>
  )
}

Panel.defaultProps = {
  classes: ''
}

Panel.propTypes = {
  attributes: PropTypes.object,
  classes: PropTypes.string,
  headingLevel: PropTypes.number,
  html: PropTypes.node,
  text: PropTypes.node,
  titleHtml: PropTypes.node,
  titleText: PropTypes.node
}

export { Panel }
