import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import PropTypes from 'prop-types'

function Link(props) {
  const { children, to, href, forwardedRef, ...attributes } = props

  if (to) {
    return (
      <ReactRouterLink innerRef={forwardedRef} to={to} {...attributes}>
        {children}
      </ReactRouterLink>
    )
  }
  return (
    <a ref={forwardedRef} href={href} {...attributes}>
      {children}
    </a>
  )
}

Link.defaultProps = {
  forwardedRef: null
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
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

const LinkWithRef = React.forwardRef(forwardRef)

export { LinkWithRef as Link }
