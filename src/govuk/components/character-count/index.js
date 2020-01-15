import React, { useEffect } from 'react';
import CharacterCountJS from 'govuk-frontend/govuk/components/character-count/character-count';
import { Textarea } from '../..';

function CharacterCount(props) {
  const {
    id,
    className,
    maxlength,
    threshold,
    maxwords,
    errorMessage,
    ...attributes
  } = props;

  const characterCountRef = React.createRef();
  const characterCountInfoClass = `${id}-info`;

  useEffect(() => {
    new CharacterCountJS(characterCountRef.current).init();
  }, [characterCountRef]);

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
        id={id}
        {...attributes}
        errorMessage={errorMessage}
        className={`govuk-js-character-count ${className || ''}${
          errorMessage ? ' govuk-textarea--error' : ''
        }`}
        aria-describedby={characterCountInfoClass}
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
  );
}

export { CharacterCount };
