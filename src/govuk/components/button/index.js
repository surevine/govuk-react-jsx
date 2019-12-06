import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import ButtonJS from 'govuk-frontend/govuk/components/button/button'
import { Link } from '../../../utils/Link'

function Button(props) {
  const buttonRef = React.createRef()
  let element = ''
  let buttonAttributes = {
    name: props.name,
    type: props.type,
    ...props.attributes,
    'data-module': 'govuk-button'
  }
  let button

  useEffect(() => {
    new ButtonJS(buttonRef.current).init()
  }, [])

  if (props.element) {
    element = props.element
  } else if (props.href) {
    element = 'a'
  } else {
    element = 'button'
  }

  let iconHtml
  if (props.isStartButton) {
    iconHtml = (
      <svg
        className="govuk-button__start-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="17.5"
        height="19"
        viewBox="0 0 33 40"
        role="presentation"
        focusable="false"
      >
        <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z" />
      </svg>
    )
  }

  const commonAttributes = {
    className: `govuk-button ${props.classes}${
      props.disabled ? ' govuk-button--disabled' : ''
    } ${props.isStartButton ? 'govuk-button--start' : ''}`,
    ref: buttonRef
  }

  if (props.preventDoubleClick) {
    buttonAttributes['data-prevent-double-click'] = props.preventDoubleClick
  }

  if (props.disabled) {
    buttonAttributes = {
      ...buttonAttributes,
      'aria-disabled': true,
      disabled: 'disabled'
    }
  }

  if (element === 'a') {
    const linkAttributes = {
      ...commonAttributes,
      classes: commonAttributes.className,
      attributes: {
        role: 'button',
        draggable: 'false',
        ...props.attributes,
        'data-module': 'govuk-button'
      },
      href: props.href,
      to: props.to
    }

    button = (
      <Link {...linkAttributes}>
        {props.html || props.text}
        {iconHtml}
      </Link>
    )
  } else if (element === 'button') {
    button = (
      // Disabling linting of button type, because the button _does_ have an explicit type
      // It is defined in the defaultProps of the component, which gets added
      // to the buttonAttributes. eslint fails to detect this, and so we need to
      // disable the linting rule
      //
      // eslint-disable-next-line react/button-has-type
      <button {...buttonAttributes} {...commonAttributes}>
        {props.html || props.text}
        {iconHtml}
      </button>
    )
  } else if (element === 'input') {
    if (!props.type) {
      buttonAttributes.type = 'submit'
    }
    button = (
      <input value={props.text} {...buttonAttributes} {...commonAttributes} />
    )
  }

  return button
}

Button.defaultProps = {
  classes: ''
}

Button.propTypes = {
  attributes: PropTypes.object,
  disabled: PropTypes.bool,
  element: PropTypes.string,
  href: PropTypes.string,
  html: PropTypes.node,
  name: PropTypes.string,
  preventDoubleClick: PropTypes.bool,
  text: PropTypes.node,
  to: PropTypes.string,
  type: PropTypes.string
}

export { Button }
