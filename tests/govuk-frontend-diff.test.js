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
  ignoreAttributes: ['style', 'src', 'disabled'],
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
      fixtures.fixtures
        .filter((fixture) =>
          // Temporarily filter out tests that contain the word "undefined" until govuk-frontend@3.10.x lands
          fixture.html ? fixture.html.indexOf('undefined') === -1 : true
        )
        .map((fixture) => [fixture.name, fixture.options, fixture.html])
    )('Example: %s', async (name, options, govukFrontendOutput) => {
      // Override values in specific fixtures to avoid issues
      // Ideally follow up anything in here with a pull request to govuk-frontend resolving the issue
      switch (`${component}:${name}`) {
        // Fix href on a summary list actions example - href is required and should not be missing
        case 'summary-list:actions with classes':
        case 'summary-list:actions with html':
          options.rows[0].actions.items[0].href = 'hack';
          // eslint-disable-next-line no-param-reassign
          govukFrontendOutput = govukFrontendOutput.replace(
            'href=""',
            'href="hack"'
          );
          break;

        default:
      }
      // END overrides

      const props = processExampleData(options, component);
      const govukReactJsxOutput = ReactDOMServer.renderToStaticMarkup(
        <ReactComponent {...props} />
      );

      const actual = cleanHtml(govukReactJsxOutput);
      const expected = cleanHtml(govukFrontendOutput);

      const isEqual = await htmlDiffer.isEqual(actual, expected);
      const diff = await htmlDiffer.diffHtml(actual, expected);

      expect(isEqual).toBeTrueWithMessage(diffLogger.getDiffText(diff));
    });
  });
});
