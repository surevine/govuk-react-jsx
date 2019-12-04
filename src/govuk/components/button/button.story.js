import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from '.'
import examples from '../../../../.cache/govuk-frontend-examples/button.yaml'

const stories = storiesOf('button', module)

for (const [index, example] of Object.entries(examples.examples)) {
  stories.add(example.name, () => <Button {...example.data} />)
}
