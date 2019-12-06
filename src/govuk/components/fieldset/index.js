import React from 'react'
import PropTypes from 'prop-types'

function Fieldset(props) {
  let legend
  if (props.legend.html || props.legend.text) {
    legend = (
      <legend
        className={`govuk-fieldset__legend ${props.legend.classes || ''}`}
      >
        {props.legend.isPageHeading ? (
          <h1 className="govuk-fieldset__heading">
            {props.legend.html || props.legend.text}
          </h1>
        ) : (
          props.legend.html || props.legend.text
        )}
      </legend>
    )
  }

  return (
    <fieldset
      className={`govuk-fieldset ${props.classes}`}
      aria-describedby={props.describedBy ? props.describedBy : null}
      role={props.role}
      {...props.attributes}
    >
      {legend}
      {props.children}
    </fieldset>
  )
}

Fieldset.defaultProps = {
  describedBy: '',
  classes: ''
}

Fieldset.propTypes = {
  legend: PropTypes.object,
  classes: PropTypes.string,
  describedBy: PropTypes.string,
  role: PropTypes.string,
  attributes: PropTypes.object,
  children: PropTypes.node
}

export { Fieldset }
