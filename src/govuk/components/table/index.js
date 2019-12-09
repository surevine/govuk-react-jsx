import React from 'react'

function Table(props) {
  const {
    caption,
    captionClassName,
    className,
    firstCellIsHeader,
    head,
    rows,
    ...attributes
  } = props

  let captionComponent
  let headComponent
  if (caption) {
    captionComponent = (
      <caption className={`govuk-table__caption ${captionClassName || ''}`}>
        {caption}
      </caption>
    )
  }

  if (head) {
    headComponent = (
      <thead className="govuk-table__head">
        <tr className="govuk-table__row">
          {head.map((item, index) => {
            const {
              className: itemClassName,
              format: itemFormat,
              html: itemHtml,
              children: itemChildren,
              reactListKey,
              ...itemAttributes
            } = item

            return (
              <th
                key={reactListKey || index}
                scope="col"
                className={`govuk-table__header ${
                  itemFormat ? `govuk-table__header--${itemFormat}` : ''
                } ${itemClassName || ''}`}
                {...itemAttributes}
              >
                {itemChildren}
              </th>
            )
          })}
        </tr>
      </thead>
    )
  }

  return (
    <table className={`govuk-table ${className || ''}`} {...attributes}>
      {captionComponent}
      {headComponent}

      <tbody className="govuk-table__body">
        {rows.map((row, rowIndex) => (
          <tr key={row.reactListKey || rowIndex} className="govuk-table__row">
            {row.map((cell, cellIndex) => {
              const {
                className: cellClassName,
                children: cellChildren,
                format: cellFormat,
                ...cellAttributes
              } = cell

              if (cellIndex === 0 && firstCellIsHeader) {
                return (
                  <th
                    key={cell.reactListKey || cellIndex}
                    scope="row"
                    className={`govuk-table__header ${cellClassName || ''}`}
                    {...cellAttributes}
                  >
                    {cellChildren}
                  </th>
                )
              }
              return (
                <td
                  key={cell.reactListKey || cellIndex}
                  className={`govuk-table__cell ${cellClassName || ''} ${
                    cellFormat ? `govuk-table__cell--${cellFormat}` : ''
                  }`}
                  {...cellAttributes}
                >
                  {cellChildren}
                </td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export { Table }
