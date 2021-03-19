import React, { useEffect, useRef } from 'react';

function Tabs(props) {
  const { className, id, idPrefix, items, title, ...attributes } = props;

  const tabsRef = useRef();

  useEffect(() => {
    (async () => {
      if (typeof document !== 'undefined') {
        const { default: TabsJS } = await import(
          /* webpackChunkName: "govuk-frontend-tabs" */
          /* webpackMode: "lazy" */
          /* webpackPrefetch: true */
          'govuk-frontend/govuk/components/tabs/tabs'
        );

        if (tabsRef.current) {
          new TabsJS(tabsRef.current).init();
        }
      }
    })();
  }, [tabsRef]);

  const filteredItems = items ? items.filter((item) => item) : [];

  const tabContent = filteredItems.map((item, index) => {
    // eslint-disable-next-line no-unused-vars
    const { id: itemId, label, panel, ...itemAttributes } = item;
    const tabId = `${itemId || `${idPrefix}-${index + 1}`}`;

    return (
      <li
        key={tabId}
        className={`govuk-tabs__list-item${
          index === 0 ? ' govuk-tabs__list-item--selected' : ''
        }`}
      >
        <a className="govuk-tabs__tab" href={`#${tabId}`} {...itemAttributes}>
          {label}
        </a>
      </li>
    );
  });

  const tabs =
    filteredItems.length > 0 ? (
      <ul className="govuk-tabs__list">{tabContent}</ul>
    ) : null;

  const panels = filteredItems.map((item, index) => {
    // eslint-disable-next-line no-unused-vars
    const { id: itemId, panel, label, ...itemAttributes } = item;
    const panelId = `${itemId || `${idPrefix}-${index + 1}`}`;

    return (
      <div
        key={panelId}
        className={`govuk-tabs__panel${
          index > 0 ? ' govuk-tabs__panel--hidden' : ''
        }`}
        id={panelId}
        {...panel}
      />
    );
  });

  return (
    <div
      id={id}
      className={`govuk-tabs ${className || ''}`}
      {...attributes}
      data-module="govuk-tabs"
      ref={tabsRef}
    >
      <h2 className="govuk-tabs__title">{title}</h2>
      {tabs}
      {panels}
    </div>
  );
}

Tabs.defaultProps = {
  title: 'Contents',
  idPrefix: '',
};

export { Tabs };
