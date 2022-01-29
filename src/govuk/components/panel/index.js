import React from 'react';

function Panel(props) {
  const { headingLevel, children, className, titleChildren, ...attributes } =
    props;
  const HeadingLevel = headingLevel ? `h${headingLevel}` : 'h1';

  const innerHtml = children ? (
    <div className="govuk-panel__body">{children}</div>
  ) : null;

  return (
    <div
      className={`govuk-panel govuk-panel--confirmation ${className || ''}`}
      {...attributes}
    >
      <HeadingLevel className="govuk-panel__title">
        {titleChildren}
      </HeadingLevel>
      {innerHtml}
    </div>
  );
}

export { Panel };
