import React from 'react';
import ReactDOMServer from 'react-dom/server';
import processExampleData from '../utils/processExampleData';
import * as components from '../src/govuk';

const glob = require('glob');
const path = require('path');
const ent = require('ent');
const prettyhtml = require('@starptech/prettyhtml');
const { HtmlDiffer } = require('@markedjs/html-differ');
const diffLogger = require('@markedjs/html-differ/lib/logger');

const govukFrontendPath = path.dirname(
  require.resolve('govuk-frontend/package.json')
);

function cleanHtml(dirtyHtml) {
  return prettyhtml(ent.decode(dirtyHtml), {
    sortAttributes: true,
  }).contents;
}

function hyphenatedToCamel(string) {
  return string
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('');
}

const htmlDiffer = new HtmlDiffer({
  ignoreAttributes: [
    'style',
    'src',
    'disabled', // Ignored because react adds ="true" to the end, making the comparison fail
    'data-nosnippet', // Ignored because react adds ="true" to the end, making the comparison fail
  ],
  ignoreSelfClosingSlash: true,
});

const allFixtures = glob
  .sync(path.join(govukFrontendPath, 'govuk/components/**/fixtures.json'))
  .map((file) => [path.basename(path.dirname(file)), require(file)]); // eslint-disable-line import/no-dynamic-require, global-require

expect.extend({
  toBeTrueWithMessage(received, message) {
    return {
      pass: received === true,
      message: () => message,
    };
  },
});

describe('govuk-react-jsx output matches govuk-frontend', () => {
  describe.each(allFixtures)('Component: %s', (component, fixtures) => {
    const ReactComponent = components[hyphenatedToCamel(component)];

    it.each(
      fixtures.fixtures.map((fixture) => [
        fixture.name,
        fixture.options,
        fixture.html,
      ])
    )('Example: %s', async (name, options, govukFrontendOutput) => {
      expect(ReactComponent).toBeDefined();

      // Override values in specific fixtures to avoid issues
      // Ideally follow up anything in here with a pull request to govuk-frontend resolving the issue
      switch (`${component}:${name}`) {
        case 'select:attributes on items':
          // Value is set, but nothing is selected - is a little bit broken - need to PR and fix but ignoring for now
          return;

        case 'cookie-banner:link with false button options':
          // Ignore this test entirely. In the nunjucks implementation and attributes key is used to house all attributes.
          // The govuk-frontend test is here to assert that button-like value and name params do not accidentally
          // end up on the element as attributes due to some imagined future mistake in the nunjucks code.
          // This doesn't really work in govuk-react-jsx, where any additional prop that's not part of the base set
          // will end up as an attribute on the underlying element. In govuk-react-jsx this is by design and it would
          // simply be up to the developer using the component to only pass the appropriate props.
          return;

        case 'checkboxes:with divider and None':
        case 'checkboxes:with divider, None and conditional items':
          // The "None of these" JavaScript initialised as part of govuk-frontend does not currently function with these components.
          // Because external JS cannot influence the checked state of controlled components in React, the govuk-frontend approach does not work here.
          // Therefore these tests which enable the data-behaviour="exclusive" attribute are disabled
          return;

        case 'character-count:with textarea maxlength attribute':
          // This fixture contains the maxlength attribute in the html but our tests run with JS enabled, so the test fails
          return;

        default:
      }
      // END overrides

      const props = processExampleData(options, component);
      const formComponents = [
        'select',
        'input',
        'textarea',
        'checkboxes',
        'radios',
        'date-input',
        'file-upload',
        'character-count',
      ];
      const govukReactJsxOutput = ReactDOMServer.renderToStaticMarkup(
        <ReactComponent
          {...{
            ...props,
            ...(formComponents.includes(component) // Make sure form components all get an onChange handler to stop React getting upset
              ? { onChange: () => {} }
              : null),
          }}
        />
      );

      const actual = cleanHtml(govukReactJsxOutput);
      const expected = cleanHtml(govukFrontendOutput);

      const isEqual = await htmlDiffer.isEqual(actual, expected);
      const diff = await htmlDiffer.diffHtml(actual, expected);

      expect(isEqual).toBeTrueWithMessage(diffLogger.getDiffText(diff));
    });
  });
});
