import React, { useEffect } from 'react';

const defaultRef = React.createRef();

const ErrorSummary = React.forwardRef((props, ref) => {
  const {
    className,
    descriptionChildren,
    errorList,
    titleChildren,
    ...attributes
  } = props;

  const errorSummaryRef = ref || defaultRef;

  useEffect(() => {
    (async () => {
      if (typeof document !== 'undefined') {
        const { default: ErrorSummaryJS } = await import(
          /* webpackChunkName: "govuk-frontend-error-summary" */
          /* webpackMode: "lazy" */
          /* webpackPrefetch: true */
          'govuk-frontend/govuk/components/error-summary/error-summary'
        );

        // Just bind the click event handlers from the gov error summary
        // This is because we don't want to focus by default - that's up to the calling app
        errorSummaryRef.current.addEventListener(
          'click',
          ErrorSummaryJS.prototype.handleClick.bind(ErrorSummaryJS.prototype)
        );
      }
    })();
  }, [errorSummaryRef]);

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
          {errorList
            ? errorList.map((error, index) => (
                <li key={error.reactListKey || index}>
                  {error.href ? (
                    <a {...error}>{error.children}</a>
                  ) : (
                    <>{error.children}</>
                  )}
                </li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
});

ErrorSummary.defaultProps = {
  titleChildren: 'There is a problem',
};

ErrorSummary.displayName = 'ErrorSummary';

export { ErrorSummary };
