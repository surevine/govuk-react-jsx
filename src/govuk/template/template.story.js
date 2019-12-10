import React from 'react'
import { storiesOf } from '@storybook/react'
import { Template as BaseTemplate } from '.'
import { BrowserRouter } from 'react-router-dom'

const stories = storiesOf('template', module)

const Template = function(props) {
  return (
    <BrowserRouter>
      <BaseTemplate {...props} />
    </BrowserRouter>
  )
}

stories.add('Default', () => (
  <Template>
    <p class="govuk-body">
      This component is corresponds to{' '}
      <a
        class="govuk-link"
        href="https://github.com/alphagov/govuk-frontend/blob/master/src/govuk/template.njk"
      >
        https://github.com/alphagov/govuk-frontend/blob/master/src/govuk/template.njk
      </a>
    </p>
  </Template>
))
