import React, { useEffect } from 'react'
import TabsJS from 'govuk-frontend/govuk/components/tabs/tabs'
import PropTypes from 'prop-types'

function Tabs(props) {
  const tabsRef = React.createRef()

  useEffect(() => {
    new TabsJS(tabsRef.current).init()
  }, [])

  // If an id 'prefix' is not passed, fall back to using the name attribute
  // instead. We need this for error messages and hints as well
  const idPrefix = props.idPrefix ? props.idPrefix : false

  const tabContent = props.items.map((item, index) => (
    <li
      key={item.id}
      className={`govuk-tabs__list-item${
        index === 0 ? ' govuk-tabs__list-item--selected' : ''
      }`}
    >
      <a
        className="govuk-tabs__tab"
        href={`#${item.id ? item.id : `${idPrefix}-${index}`}`}
        {...props.attributes}
      >
        {item.label}
      </a>
    </li>
  ))

  const tabs = <ul className="govuk-tabs__list">{tabContent}</ul>

  const panels = props.items.map((item, index) => (
    <section
      key={item.id}
      className={`govuk-tabs__panel${
        index > 0 ? ' govuk-tabs__panel--hidden' : ''
      }`}
      id={item.id}
      {...props.attributes}
    >
      {item.panel.html || item.panel.text}
    </section>
  ))

  return (
    <div
      id={props.id}
      className={`govuk-tabs ${props.classes}`}
      {...props.attributes}
      data-module="govuk-tabs"
      ref={tabsRef}
    >
      <h2 className="govuk-tabs__title">{props.title}</h2>
      {tabs}
      {panels}
    </div>
  )
}

Tabs.defaultProps = {
  title: 'Contents',
  classes: ''
}

Tabs.propTypes = {
  attributes: PropTypes.object,
  classes: PropTypes.string,
  id: PropTypes.string,
  idPrefix: PropTypes.string,
  items: PropTypes.array,
  title: PropTypes.string
}

export { Tabs }
