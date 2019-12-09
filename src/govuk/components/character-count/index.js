import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import CharacterCountJS from 'govuk-frontend/govuk/components/character-count/character-count'
import { Textarea } from '../'

function CharacterCount(props) {
  const {
    className,
    maxlength,
    threshold,
    maxwords,
    errorMessage,
    ...attributes
  } = props
  const characterCountRef = React.createRef()
  const characterCountInfoClass = `${props.id}-info`

  useEffect(() => {
    new CharacterCountJS(characterCountRef.current).init()
  }, [])

  return (
    <div
      className="govuk-character-count"
      data-module="govuk-character-count"
      data-maxlength={maxlength}
      data-threshold={threshold}
      data-maxwords={maxwords}
      ref={characterCountRef}
    >
      <Textarea
        {...attributes}
        className={`govuk-js-character-count ${className}${
          errorMessage ? ' govuk-textarea--error' : ''
        }`}
        describedBy={characterCountInfoClass}
      />
      <span
        id={characterCountInfoClass}
        className="govuk-hint govuk-character-count__message"
        aria-live="polite"
      >
        You can enter up to {maxlength || maxwords}{' '}
        {maxwords ? 'words' : 'characters'}
      </span>
    </div>
  )
}

CharacterCount.propTypes = {
  errorMessage: PropTypes.object,
  hint: PropTypes.object,
  id: PropTypes.string,
  label: PropTypes.object,
  maxlength: PropTypes.number,
  maxwords: PropTypes.number,
  name: PropTypes.string,
  rows: PropTypes.number,
  threshold: PropTypes.number,
  value: PropTypes.string
}

export { CharacterCount }
