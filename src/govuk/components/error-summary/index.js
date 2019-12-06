import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import ErrorSummaryJS from 'govuk-frontend/govuk/components/error-summary/error-summary'

function ErrorSummary(props) {
  const errorSummaryRef = React.createRef()
  useEffect(() => {
    new ErrorSummaryJS(errorSummaryRef.current).init()
  }, [])

  let description
  if (props.descriptionHtml || props.descriptionText) {
    description = <p>{props.descriptionHtml || props.descriptionText}</p>
  }

  return (
    <div
      className={`govuk-error-summary ${props.classes}`}
      aria-labelledby="error-summary-title"
      role="alert"
      tabIndex="-1"
      {...props.attributes}
      data-module="govuk-error-summary"
      ref={errorSummaryRef}
    >
      <h2 className="govuk-error-summary__title" id="error-summary-title">
        {props.titleHtml || props.titleText}
      </h2>
      <div className="govuk-error-summary__body">
        {description}
        <ul className="govuk-list govuk-error-summary__list">
          {props.errorList.map((error, index) => (
            <li key={error.reactListKey || index}>
              {error.href ? (
                <a href={error.href} {...error.attributes}>
                  {error.html || error.text}
                </a>
              ) : (
                <>{error.html || error.text}</>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

ErrorSummary.defaultProps = {
  classes: ''
}

ErrorSummary.propTypes = {
  attributes: PropTypes.object,
  classes: PropTypes.string,
  descriptionHtml: PropTypes.node,
  descriptionText: PropTypes.node,
  errorList: PropTypes.array,
  titleHtml: PropTypes.node,
  titleText: PropTypes.node
}

export { ErrorSummary }
