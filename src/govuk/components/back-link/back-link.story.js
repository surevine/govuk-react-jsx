import React from 'react'
import { storiesOf } from '@storybook/react'
import { BackLink } from '.'
import examples from './examples'
import processExampleData from '../../../../utils/processExampleData'

const stories = storiesOf('back-link', module)

for (const [index, example] of Object.entries(
  processExampleData(examples.examples)
)) {
  stories.add(example.name, () => <BackLink {...example.data} />)
}
