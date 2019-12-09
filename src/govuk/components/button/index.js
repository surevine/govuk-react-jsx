import React, { useEffect } from 'react'
import ButtonJS from 'govuk-frontend/govuk/components/button/button'
import { Link } from '../../../utils/Link'

function Button(props) {
  const {
    element,
    href,

    to,
    isStartButton,
    disabled,
    className,
    preventDoubleClick,
    name,
    type,
    html,
    text,
    ...attributes
  } = props
  const buttonRef = React.createRef()
  let el = ''
  let buttonAttributes = {
    name: name,
    type: type,
    ...attributes,
    'data-module': 'govuk-button'
  }
  let button

  useEffect(() => {
    new ButtonJS(buttonRef.current).init()
  }, [])

  if (element) {
    el = element
  } else if (href) {
    el = 'a'
  } else {
    el = 'button'
  }

  let iconHtml
  if (isStartButton) {
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
    className: `govuk-button ${className}${
      disabled ? ' govuk-button--disabled' : ''
    } ${isStartButton ? 'govuk-button--start' : ''}`,
    ref: buttonRef
  }

  if (preventDoubleClick) {
    buttonAttributes['data-prevent-double-click'] = preventDoubleClick
  }

  if (disabled) {
    buttonAttributes = {
      ...buttonAttributes,
      'aria-disabled': true,
      disabled: 'disabled'
    }
  }

  if (el === 'a') {
    const linkAttributes = {
      ...commonAttributes,
      role: 'button',
      draggable: 'false',
      ...attributes,
      'data-module': 'govuk-button',
      href: href,
      to: to
    }

    button = (
      <Link {...linkAttributes}>
        {html || text}
        {iconHtml}
      </Link>
    )
  } else if (el === 'button') {
    button = (
      // Disabling linting of button type, because the button _does_ have an explicit type
      // It is defined in the defaultProps of the component, which gets added
      // to the buttonAttributes. eslint fails to detect this, and so we need to
      // disable the linting rule
      //
      // eslint-disable-next-line react/button-has-type
      <button {...buttonAttributes} {...commonAttributes}>
        {html || text}
        {iconHtml}
      </button>
    )
  } else if (el === 'input') {
    if (!type) {
      buttonAttributes.type = 'submit'
    }
    button = <input value={text} {...buttonAttributes} {...commonAttributes} />
  }

  return button
}

export { Button }
