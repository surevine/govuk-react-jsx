import React, { useEffect, useRef } from 'react';

function Accordion(props) {
  const accordionRef = useRef();
  const { headingLevel, items, className, id, ...attributes } = props;

  useEffect(() => {
    (async () => {
      if (typeof document !== 'undefined') {
        const { default: AccordionJS } = await import(
          /* webpackChunkName: "govuk-frontend-accordion" */
          /* webpackMode: "lazy" */
          /* webpackPrefetch: true */
          'govuk-frontend/govuk/components/accordion/accordion'
        );

        if (accordionRef.current) {
          new AccordionJS(accordionRef.current).init();
        }
      }
    })();
  }, [accordionRef]);

  const HeadingLevel = headingLevel ? `h${headingLevel}` : 'h2';

  const innerHtml = items.map((item, index) => {
    if (!item) {
      return;
    }

    return (
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
              id={`${id}-heading-${index + 1}`}
            >
              {item.heading.children}
            </span>
          </HeadingLevel>
          {item.summary ? (
            <div
              className="govuk-accordion__section-summary govuk-body"
              id={`${id}-summary-${index + 1}`}
            >
              {item.summary.children}
            </div>
          ) : (
            ''
          )}
        </div>
        <div
          id={`${id}-content-${index + 1}`}
          className="govuk-accordion__section-content"
          aria-labelledby={`${id}-heading-${index + 1}`}
        >
          {item.content.children}
        </div>
      </div>
    );
  });
  return (
    <div
      {...attributes}
      className={`govuk-accordion ${className || ''}`}
      data-module="govuk-accordion"
      ref={accordionRef}
    >
      {innerHtml}
    </div>
  );
}

export { Accordion };
