import React from 'react';
import { Link } from './../../../utils/Link';

function BackLink(props) {
  const { children, href, to, className, ...attributes } = props;
  const contents = children;

  return (
    <Link
      {...attributes}
      className={`govuk-back-link ${className || ''}`}
      href={href}
      to={to}
    >
      {contents}
    </Link>
  );
}

BackLink.defaultProps = {
  href: '/',
  children: 'Back',
};

export { BackLink };
