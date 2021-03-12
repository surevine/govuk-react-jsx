import React from 'react';
import { Button } from '../button';
import { Link } from '../../../utils/Link';

function CookieBanner(props) {
  const { className, messages, ...attributes } = props;

  return (
    <div
      className={`govuk-cookie-banner ${className || ''}`}
      role="region"
      {...attributes}
    >
      {messages.map((message) => {
        const {
          headingChildren,
          children,
          actions,
          className: messageClassName,
          ...messageAttributes
        } = message;

        return (
          <div
            className={`govuk-cookie-banner__message govuk-width-container ${
              messageClassName || ''
            }`}
            {...messageAttributes}
          >
            <div className="govuk-grid-row">
              <div className="govuk-grid-column-two-thirds">
                {headingChildren ? (
                  <h2 className="govuk-cookie-banner__heading govuk-heading-m">
                    {headingChildren}
                  </h2>
                ) : null}

                <div className="govuk-cookie-banner__content">
                  {children ? (
                    typeof children === 'string' ? (
                      <p className="govuk-body">{children}</p>
                    ) : (
                      children
                    )
                  ) : null}
                </div>
              </div>
            </div>

            {actions ? (
              <div className="govuk-button-group">
                {actions.map((action) => {
                  const {
                    className: actionClassName,
                    ...actionAttributes
                  } = action;

                  return action.href || action.to ? (
                    <Link
                      {...actionAttributes}
                      className={`govuk-link ${actionClassName || ''}`}
                    />
                  ) : (
                    <Button {...action} />
                  );
                })}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

CookieBanner.defaultProps = {
  'aria-label': 'Cookie banner',
};

export { CookieBanner };
