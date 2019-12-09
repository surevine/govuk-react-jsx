import React from 'react'
import { Link } from '../../../utils/Link'

function Breadcrumbs(props) {
  const { items, className, ...attributes } = props
  const breadcrumbs = items.map((item, index) =>
    item.href || item.to ? (
      <li
        key={item.reactListKey || index}
        className="govuk-breadcrumbs__list-item"
      >
        <Link className="govuk-breadcrumbs__link" {...item}>
          {item.html || item.text}
        </Link>
      </li>
    ) : (
      <li
        key={item.reactListKey || index}
        className="govuk-breadcrumbs__list-item"
        aria-current="page"
      >
        {item.html || item.text}
      </li>
    )
  )

  return (
    <div className={`govuk-breadcrumbs ${className}`} {...attributes}>
      <ol className="govuk-breadcrumbs__list">{breadcrumbs}</ol>
    </div>
  )
}

export { Breadcrumbs }
