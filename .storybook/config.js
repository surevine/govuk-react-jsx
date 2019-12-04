import { configure } from '@storybook/react'
import './styles.scss'

// automatically import all files called stories.js
configure(
  require.context('../src/govuk/components', true, /.story\.js$/),
  module
)

// Simulate the js-enabled class that govuk frontend template adds to the page
configure(() => document.body.classList.add('js-enabled'))
