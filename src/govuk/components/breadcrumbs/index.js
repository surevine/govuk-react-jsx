import React from 'react';
import { Link } from '../../../utils/Link';

function Breadcrumbs(props) {
  const { items, className, collapseOnMobile, ...attributes } = props;
  const breadcrumbs = items.map((item, index) => {
    const { href, to, reactListKey, children, ...itemAttributes } = item;

    return href || to ? (
      <li key={reactListKey || index} className="govuk-breadcrumbs__list-item">
        <Link
          href={href}
          to={to}
          className="govuk-breadcrumbs__link"
          {...itemAttributes}
        >
          {children}
        </Link>
      </li>
    ) : (
      <li
        key={reactListKey || index}
        className="govuk-breadcrumbs__list-item"
        aria-current="page"
      >
        {children}
      </li>
    );
  });

  return (
    <div
      className={`govuk-breadcrumbs ${className || ''} ${
        collapseOnMobile ? 'govuk-breadcrumbs--collapse-on-mobile' : ''
      }`}
      {...attributes}
    >
      <ol className="govuk-breadcrumbs__list">{breadcrumbs}</ol>
    </div>
  );
}

export { Breadcrumbs };
