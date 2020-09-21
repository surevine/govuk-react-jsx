import React from 'react';
import { Tag } from '../..';

function PhaseBanner(props) {
  const { className, tag, children, ...attributes } = props;
  return (
    <div className={`govuk-phase-banner ${className || ''}`} {...attributes}>
      <p className="govuk-phase-banner__content">
        <Tag
          className={`govuk-phase-banner__content__tag ${tag?.className || ''}`}
        >
          {tag?.children}
        </Tag>

        <span className="govuk-phase-banner__text">{children}</span>
      </p>
    </div>
  );
}

export { PhaseBanner };
