import React from 'react'

function Fieldset(props) {
  const { legend, className, describedBy, children, ...attributes } = props
  let legendComponent
  if (legend.html || legend.text) {
    legendComponent = (
      <legend className={`govuk-fieldset__legend ${legend.className}`}>
        {legend.isPageHeading ? (
          <h1 className="govuk-fieldset__heading">
            {legend.html || legend.text}
          </h1>
        ) : (
          legend.html || legend.text
        )}
      </legend>
    )
  }

  return (
    <fieldset className={`govuk-fieldset ${className}`} {...attributes}>
      {legendComponent}
      {children}
    </fieldset>
  )
}

export { Fieldset }
