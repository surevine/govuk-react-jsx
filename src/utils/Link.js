import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import PropTypes from 'prop-types'

function Link(props) {
  const { children, classes, attributes, to, href, forwardedRef } = props

  if (to) {
    return (
      <ReactRouterLink
        innerRef={forwardedRef}
        to={to}
        className={classes}
        {...attributes}
      >
        {children}
      </ReactRouterLink>
    )
  }
  return (
    <a ref={forwardedRef} href={href} className={classes} {...attributes}>
      {children}
    </a>
  )
}

Link.defaultProps = {
  classes: '',
  forwardedRef: null,
  attributes: {}
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.string,
  attributes: PropTypes.object,
  to: PropTypes.string,
  href: PropTypes.string,
  forwardedRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ])
}

function forwardRef(props, ref) {
  return <Link {...props} forwardedRef={ref} />
}

forwardRef.displayName = 'LinkWithRef'

export default React.forwardRef(forwardRef)
