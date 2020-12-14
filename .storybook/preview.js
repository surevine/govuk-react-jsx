import { configure, addDecorator, addParameters } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import theme from './theme';
import './styles.scss';

addDecorator(jsxDecorator);

addParameters({
  options: {
    theme,
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
});

// Simulate the js-enabled class that govuk frontend template adds to the page
configure(() => document.body.classList.add('js-enabled'), module);
