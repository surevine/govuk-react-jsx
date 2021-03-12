import React, { useEffect, useRef } from 'react';

function NotificationBanner(props) {
  const {
    type,
    titleChildren,
    titleHeadingLevel,
    children,
    className,
    titleId,
    role,
    disableAutoFocus,
    ...attributes
  } = props;

  const notificationBannerRef = useRef();

  useEffect(() => {
    (async () => {
      if (typeof document !== 'undefined') {
        const { default: NotificationBannerJS } = await import(
          /* webpackChunkName: "govuk-frontend-notification-banner" */
          /* webpackMode: "lazy" */
          /* webpackPrefetch: true */
          'govuk-frontend/govuk/components/notification-banner/notification-banner'
        );

        if (notificationBannerRef.current) {
          new NotificationBannerJS(notificationBannerRef.current).init();
        }
      }
    })();
  }, [notificationBannerRef]);

  const HeadingLevel = titleHeadingLevel ? `h${titleHeadingLevel}` : 'h2';

  let successBanner = false;

  if (type === 'success') {
    successBanner = true;
  }

  let typeClass = '';
  if (successBanner) {
    typeClass = `govuk-notification-banner--${type}`;
  }

  let roleAttribute = 'region';
  if (role) {
    roleAttribute = role;
  } else if (successBanner) {
    roleAttribute = 'alert';
  }

  let title = titleChildren;
  if (!titleChildren) {
    if (successBanner) {
      title = 'Success';
    } else {
      title = 'Important';
    }
  }

  return (
    <div
      className={`govuk-notification-banner ${typeClass} ${className || ''}`}
      role={roleAttribute}
      aria-labelledby={titleId}
      data-module="govuk-notification-banner"
      ref={notificationBannerRef}
      {...(disableAutoFocus ? { 'data-disable-auto-focus': 'true' } : {})}
      {...attributes}
    >
      <div className="govuk-notification-banner__header">
        <HeadingLevel className="govuk-notification-banner__title" id={titleId}>
          {title}
        </HeadingLevel>
      </div>
      <div className="govuk-notification-banner__content">
        {typeof children === 'string' ? (
          <p className="govuk-notification-banner__heading">{children}</p>
        ) : (
          children
        )}
      </div>
    </div>
  );
}

NotificationBanner.defaultProps = {
  titleId: 'govuk-notification-banner-title',
};

export { NotificationBanner };
