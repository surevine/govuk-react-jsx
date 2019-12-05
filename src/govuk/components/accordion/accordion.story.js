import React from 'react'
import { storiesOf } from '@storybook/react'
import Accordion from '.'
import examples from './examples'
import processExampleData from '../../../../utils/processExampleData'

const stories = storiesOf('accordion', module)

for (const [index, example] of Object.entries(
  processExampleData(examples.examples)
)) {
  // Process the example data to turn html strings into jsx and to re-map params as necessary
  stories.add(example.name, () => <Accordion {...example.data} />)
}
