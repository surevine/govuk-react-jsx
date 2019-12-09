import React from 'react'
import { Link } from '../../../utils/Link'

function Breadcrumbs(props) {
  const { items, className, ...attributes } = props
  const breadcrumbs = items.map((item, index) => {
    const { href, to, reactListKey, html, text, ...itemAttributes } = item

    return href || to ? (
      <li key={reactListKey || index} className="govuk-breadcrumbs__list-item">
        <Link
          href={href}
          to={to}
          className="govuk-breadcrumbs__link"
          {...itemAttributes}
        >
          {html || text}
        </Link>
      </li>
    ) : (
      <li
        key={reactListKey || index}
        className="govuk-breadcrumbs__list-item"
        aria-current="page"
      >
        {html || text}
      </li>
    )
  })

  return (
    <div className={`govuk-breadcrumbs ${className || ''}`} {...attributes}>
      <ol className="govuk-breadcrumbs__list">{breadcrumbs}</ol>
    </div>
  )
}

export { Breadcrumbs }
