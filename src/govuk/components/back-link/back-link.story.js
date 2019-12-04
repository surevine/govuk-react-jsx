import React from 'react'
import { storiesOf } from '@storybook/react'
import BackLink from '.'
import examples from '../../../../.cache/govuk-frontend-examples/back-link.yaml'

const stories = storiesOf('back-link', module)

for (const [index, example] of Object.entries(examples.examples)) {
  stories.add(example.name, () => <BackLink {...example.data} />)
}
