import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '../../../utils/Link'

function Footer(props) {
  let navigation
  let meta

  if (props.navigation) {
    navigation = (
      <>
        <div className="govuk-footer__navigation">
          {props.navigation.map((nav, navIndex) => (
            <div
              className="govuk-footer__section"
              key={nav.reactListKey || navIndex}
            >
              <h2 className="govuk-footer__heading govuk-heading-m">
                {nav.title}
              </h2>
              {nav.items && (
                <ul
                  className={`govuk-footer__list ${
                    nav.columns
                      ? `govuk-footer__list--columns-${nav.columns}`
                      : ''
                  }`}
                >
                  {nav.items.map((item, index) => (
                    <React.Fragment key={item.reactListKey || index}>
                      {(item.href || item.to) && item.text && (
                        <li className="govuk-footer__list-item">
                          <Link
                            classes={`govuk-footer__link ${item.classes || ''}`}
                            to={item.to}
                            href={item.href}
                            {...item.attributes}
                          >
                            {item.text}
                          </Link>
                        </li>
                      )}
                    </React.Fragment>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <hr className="govuk-footer__section-break" />
      </>
    )
  }

  if (props.meta) {
    meta = (
      <>
        <h2 className="govuk-visually-hidden">
          {props.meta.visuallyHiddenTitle
            ? props.meta.visuallyHiddenTitle
            : 'Support links'}
        </h2>

        {props.meta.items && (
          <>
            <ul className="govuk-footer__inline-list">
              {props.meta.items.map((item, index) => (
                <li
                  className="govuk-footer__inline-list-item"
                  key={item.reactListKey || index}
                >
                  <Link
                    classes={`govuk-footer__link ${item.classes || ''}`}
                    to={item.to}
                    href={item.href}
                    {...item.attributes}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}

        {(props.meta.text || props.meta.html) && (
          <div className="govuk-footer__meta-custom">
            {props.meta.html || props.meta.text}
          </div>
        )}
      </>
    )
  }

  return (
    <footer
      className={`govuk-footer ${props.classes}`}
      role="contentinfo"
      {...props.attributes}
    >
      <div
        className={`govuk-width-container ${
          props.containerClasses ? props.containerClasses : ''
        }`}
      >
        {navigation}
        <div className="govuk-footer__meta">
          <div className="govuk-footer__meta-item govuk-footer__meta-item--grow">
            {meta}
            {/* The SVG needs `focusable="false"` so that Internet Explorer does not */}
            {/* treat it as an interactive element - without this it will be */}
            {/* 'focusable' when using the keyboard to navigate. */}
            <svg
              role="presentation"
              focusable="false"
              className="govuk-footer__licence-logo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 483.2 195.7"
              height="17"
              width="41"
            >
              <path
                fill="currentColor"
                d="M421.5 142.8V.1l-50.7 32.3v161.1h112.4v-50.7zm-122.3-9.6A47.12 47.12 0 0 1 221 97.8c0-26 21.1-47.1 47.1-47.1 16.7 0 31.4 8.7 39.7 21.8l42.7-27.2A97.63 97.63 0 0 0 268.1 0c-36.5 0-68.3 20.1-85.1 49.7A98 98 0 0 0 97.8 0C43.9 0 0 43.9 0 97.8s43.9 97.8 97.8 97.8c36.5 0 68.3-20.1 85.1-49.7a97.76 97.76 0 0 0 149.6 25.4l19.4 22.2h3v-87.8h-80l24.3 27.5zM97.8 145c-26 0-47.1-21.1-47.1-47.1s21.1-47.1 47.1-47.1 47.2 21 47.2 47S123.8 145 97.8 145"
              />
            </svg>
            <span className="govuk-footer__licence-description">
              All content is available under the{' '}
              <a
                className="govuk-footer__link"
                href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
                rel="license"
              >
                Open Government Licence v3.0
              </a>{' '}
              , except where otherwise stated
            </span>
          </div>
          <div className="govuk-footer__meta-item">
            <a
              className="govuk-footer__link govuk-footer__copyright-logo"
              href="https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/"
            >
              © Crown copyright
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  classes: ''
}

Footer.propTypes = {
  attributes: PropTypes.object,
  classes: PropTypes.string,
  containerClasses: PropTypes.string,
  meta: PropTypes.object,
  navigation: PropTypes.array
}

export { Footer }
