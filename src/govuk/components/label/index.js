import React from 'react'
import PropTypes from 'prop-types'

function Label(props) {
  const label = (
    // Stop eslint flagging the for/id combination as an error. It is failing due to the way the
    // input and label are located in different components and so it cannot track the association
    //
    // eslint-disable-next-line jsx-a11y/label-has-for
    <label
      className={`govuk-label ${props.classes}`}
      {...props.attributes}
      htmlFor={props.for}
    >
      {props.html || props.text}
    </label>
  )

  if (props.isPageHeading === true) {
    return <h1 className="govuk-label-wrapper">{label}</h1>
  }

  return label
}

Label.defaultProps = {
  classes: ''
}

Label.propTypes = {
  attributes: PropTypes.object,
  html: PropTypes.node,
  isPageHeading: PropTypes.bool,
  text: PropTypes.node
}

export { Label }
