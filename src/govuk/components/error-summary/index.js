import React, { useEffect, useRef } from 'react';

function ErrorSummary(props) {
  const {
    className,
    descriptionChildren,
    errorList,
    titleChildren,
    ...attributes
  } = props;

  const errorSummaryRef = useRef();

  useEffect(() => {
    (async () => {
      if (typeof document !== 'undefined') {
        const { default: ErrorSummaryJS } = await import(
          /* webpackChunkName: "govuk-frontend-error-summary" */
          /* webpackMode: "lazy-once" */
          /* webpackPrefetch: true */
          'govuk-frontend/govuk/components/error-summary/error-summary'
        );

        new ErrorSummaryJS(errorSummaryRef.current).init();
      }
    })();
  }, [errorSummaryRef]);

  useEffect(() => {
    errorSummaryRef.current.focus();
  }, [errorList]);

  let description;
  if (descriptionChildren) {
    description = <p>{descriptionChildren}</p>;
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
                <a {...error}>{error.children}</a>
              ) : (
                <>{error.children}</>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

ErrorSummary.defaultProps = {
  titleChildren: 'There is a problem',
};

export { ErrorSummary };
