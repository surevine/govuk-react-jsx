import { configure, addDecorator, addParameters } from '@storybook/react'
import { jsxDecorator } from 'storybook-addon-jsx'
import theme from './theme'
import './styles.scss'

addDecorator(jsxDecorator)

addParameters({
  options: {
    theme: theme
  }
})

// automatically import all files called stories.js
configure(require.context('../src', true, /.story\.js$/), module)

// Simulate the js-enabled class that govuk frontend template adds to the page
configure(() => document.body.classList.add('js-enabled'), module)
