import React from 'react'
import PropTypes from 'prop-types'

function Table(props) {
  let caption
  let head
  if (props.caption) {
    caption = (
      <caption className={`govuk-table__caption ${props.captionClasses || ''}`}>
        {props.caption}
      </caption>
    )
  }

  if (props.head) {
    head = (
      <thead className="govuk-table__head">
        <tr className="govuk-table__row">
          {props.head.map((item, index) => (
            <th
              key={item.reactListKey || index}
              scope="col"
              className={`govuk-table__header ${
                item.format ? `govuk-table__header--${item.format}` : ''
              } ${item.classes || ''}`}
              colSpan={item.colspan || null}
              rowSpan={item.rowspan || null}
              {...item.attributes}
            >
              {item.html || item.text}
            </th>
          ))}
        </tr>
      </thead>
    )
  }

  return (
    <table className={`govuk-table ${props.classes}`} {...props.attributes}>
      {caption}
      {head}

      <tbody className="govuk-table__body">
        {props.rows.map((row, rowIndex) => (
          <tr key={row.reactListKey || rowIndex} className="govuk-table__row">
            {row.map((cell, cellIndex) => {
              const commonAttributes = {
                colSpan: cell.colspan,
                rowSpan: cell.rowspan,
                attributes: cell.attributes
              }

              if (cellIndex === 0 && props.firstCellIsHeader) {
                return (
                  <th
                    key={cell.reactListKey || cellIndex}
                    scope="row"
                    className={`govuk-table__header ${cell.classes || ''}`}
                    {...commonAttributes}
                  >
                    {cell.html || cell.text}
                  </th>
                )
              }
              return (
                <td
                  key={cell.reactListKey || cellIndex}
                  className={`govuk-table__cell ${cell.classes || ''} ${
                    cell.format ? `govuk-table__cell--${cell.format}` : ''
                  }`}
                  {...commonAttributes}
                >
                  {cell.html || cell.text}
                </td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

Table.defaultProps = {
  classes: ''
}

Table.propTypes = {
  attributes: PropTypes.object,
  caption: PropTypes.string,
  captionClasses: PropTypes.string,
  classes: PropTypes.string,
  firstCellIsHeader: PropTypes.bool,
  head: PropTypes.array,
  rows: PropTypes.array
}

export { Table }
