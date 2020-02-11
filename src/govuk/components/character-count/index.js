import React, { useEffect, useRef } from 'react';
import CharacterCountJS from 'govuk-frontend/govuk/components/character-count/character-count';
import { Textarea, Hint } from '../..';

const CharacterCount = React.forwardRef((props, ref) => {
  const {
    id,
    className,
    maxlength,
    threshold,
    maxwords,
    errorMessage,
    countMessage,
    ...attributes
  } = props;

  const characterCountRef = useRef();
  const characterCountInfoId = `${id}-info`;

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
        aria-describedby={characterCountInfoId}
        ref={ref}
      />
      <Hint
        id={characterCountInfoId}
        className={`govuk-hint govuk-character-count__message ${countMessage?.className ||
          ''}`}
        aria-live="polite"
      >
        You can enter up to {maxlength || maxwords}{' '}
        {maxwords ? 'words' : 'characters'}
      </Hint>
    </div>
  );
});

CharacterCount.displayName = 'CharacterCount';

export { CharacterCount };
