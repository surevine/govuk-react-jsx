import React from 'react';

function Label(props) {
  const { className, htmlFor, children, isPageHeading, ...attributes } = props;
  const label = (
    // Stop eslint flagging the for/id combination as an error. It is failing due to the way the
    // input and label are located in different components and so it cannot track the association
    //
    // eslint-disable-next-line jsx-a11y/label-has-for
    <label
      className={`govuk-label ${className || ''}`}
      {...attributes}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );

  if (isPageHeading === true) {
    return <h1 className="govuk-label-wrapper">{label}</h1>;
  }

  return label;
}

export { Label };
