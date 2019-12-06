import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import AccordionJS from 'govuk-frontend/govuk/components/accordion/accordion'

function Accordion(props) {
  const accordionRef = React.createRef()

  useEffect(() => {
    new AccordionJS(accordionRef.current).init()
  }, [])

  const HeadingLevel = props.headingLevel ? `h${props.headingLevel}` : 'h2'

  const innerHtml = props.items.map((item, index) => (
    <div
      key={item.reactListKey || index}
      className={`govuk-accordion__section ${
        item.expanded ? 'govuk-accordion__section--expanded' : ''
      }`}
    >
      <div className="govuk-accordion__section-header">
        <HeadingLevel className="govuk-accordion__section-heading">
          <span
            className="govuk-accordion__section-button"
            id={`${props.id}-heading-${index + 1}`}
          >
            {item.heading.html || item.heading.text}
          </span>
        </HeadingLevel>
        {item.summary ? (
          <div
            className="govuk-accordion__section-summary govuk-body"
            id={`${props.id}-summary-${index + 1}`}
          >
            {item.summary.html || item.summary.text}
          </div>
        ) : (
          ''
        )}
      </div>
      <div
        id={`${props.id}-content-${index + 1}`}
        className="govuk-accordion__section-content"
        aria-labelledby={`${props.id}-heading-${index + 1}`}
      >
        {item.content.html || item.content.text}
      </div>
    </div>
  ))
  return (
    <div
      className={`govuk-accordion ${props.classes}`}
      data-module="govuk-accordion"
      id={props.id}
      {...props.attributes}
      ref={accordionRef}
    >
      {innerHtml}
    </div>
  )
}

Accordion.defaultProps = {
  classes: ''
}

Accordion.propTypes = {
  attributes: PropTypes.object,
  classes: PropTypes.string,
  headingLevel: PropTypes.string,
  id: PropTypes.string,
  items: PropTypes.array
}

export { Accordion }
