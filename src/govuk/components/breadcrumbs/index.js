import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '../../../utils/Link'

function Breadcrumbs(props) {
  const breadcrumbs = props.items.map((item, index) =>
    item.href || item.to ? (
      <li
        key={item.reactListKey || index}
        className="govuk-breadcrumbs__list-item"
      >
        <Link
          classes="govuk-breadcrumbs__link"
          attributes={item.attributes}
          href={item.href}
          to={item.to}
        >
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
    <div className={`govuk-breadcrumbs ${props.classes}`} {...props.attributes}>
      <ol className="govuk-breadcrumbs__list">{breadcrumbs}</ol>
    </div>
  )
}

Breadcrumbs.defaultProps = {
  classes: ''
}

Breadcrumbs.propTypes = {
  attributes: PropTypes.object,
  classes: PropTypes.string,
  items: PropTypes.array
}

export { Breadcrumbs }
