import React, { useEffect } from 'react'
import ErrorSummaryJS from 'govuk-frontend/govuk/components/error-summary/error-summary'

function ErrorSummary(props) {
  const {
    className,
    descriptionChildren,
    errorList,
    titleChildren,
    ...attributes
  } = props
  const errorSummaryRef = React.createRef()
  useEffect(() => {
    new ErrorSummaryJS(errorSummaryRef.current).init()
  }, [])

  let description
  if (descriptionChildren) {
    description = <p>{descriptionChildren}</p>
  }

  return (
    <div
      className={`govuk-error-summary ${className || ''}`}
      aria-labelledby="error-summary-title"
      role="alert"
      tabIndex="-1"
      {...attributes}
      data-module="govuk-error-summary"
      ref={errorSummaryRef}
    >
      <h2 className="govuk-error-summary__title" id="error-summary-title">
        {titleChildren}
      </h2>
      <div className="govuk-error-summary__body">
        {description}
        <ul className="govuk-list govuk-error-summary__list">
          {errorList.map((error, index) => (
            <li key={error.reactListKey || index}>
              {error.href ? (
                <a href={error.href} {...error.attributes}>
                  {error.children}
                </a>
              ) : (
                <>{error.children}</>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export { ErrorSummary }
