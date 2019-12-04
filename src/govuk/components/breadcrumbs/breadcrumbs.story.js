import React from 'react'
import { storiesOf } from '@storybook/react'
import Breadcrumbs from '.'
import examples from '../../../../.cache/govuk-frontend-examples/breadcrumbs.yaml'

const stories = storiesOf('breadcrumbs', module)

for (const [index, example] of Object.entries(examples.examples)) {
  stories.add(example.name, () => (
    <>
      {example.description && (
        <p className="govuk-body">{example.description}</p>
      )}
      <Breadcrumbs {...example.data} />
    </>
  ))
}
