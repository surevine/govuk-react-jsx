import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Radios } from '.'
import examples from './examples'
import processExampleData from '../../../../utils/processExampleData'

examples.examples.push({
  name: 'value as a top level prop (For use with React form libraries)',
  data: {
    value: 'no',
    items: [
      {
        children: 'Yes',
        value: 'yes'
      },
      {
        children: 'No',
        value: 'no'
      }
    ],
    name: 'yesno'
  }
})

const stories = storiesOf('radios', module)

for (const [index, example] of Object.entries(
  processExampleData(examples.examples)
)) {
  stories.add(example.name, () => <Radios {...example.data} />)
}
