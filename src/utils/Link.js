import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

function Link(props) {
  const { children, to, href, forwardedRef, ...attributes } = props;

  if (to) {
    return (
      <ReactRouterLink innerRef={forwardedRef} to={to} {...attributes}>
        {children}
      </ReactRouterLink>
    );
  }
  return (
    <a ref={forwardedRef} href={href || '#'} {...attributes}>
      {children}
    </a>
  );
}

Link.defaultProps = {
  forwardedRef: null,
};

function forwardRef(props, ref) {
  return <Link {...props} forwardedRef={ref} />;
}

forwardRef.displayName = 'LinkWithRef';

const LinkWithRef = React.forwardRef(forwardRef);

export { LinkWithRef as Link };
