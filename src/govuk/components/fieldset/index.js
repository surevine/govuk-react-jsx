import React from 'react';

function Fieldset(props) {
  const { legend, className, children, ...attributes } = props;
  let legendComponent;
  if (legend.children) {
    legendComponent = (
      <legend className={`govuk-fieldset__legend ${legend.className || ''}`}>
        {legend.isPageHeading ? (
          <h1 className="govuk-fieldset__heading">{legend.children}</h1>
        ) : (
          legend.children
        )}
      </legend>
    );
  }

  return (
    <fieldset className={`govuk-fieldset ${className || ''}`} {...attributes}>
      {legendComponent}
      {children}
    </fieldset>
  );
}

export { Fieldset };
