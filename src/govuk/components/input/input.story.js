import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Input } from '.'
import examples from './examples'
import processExampleData from '../../../../utils/processExampleData'

const stories = storiesOf('input', module)

// React specific examples - these don't get pumped into the tests
examples.examples.push({
  name: 'With onChange event',
  data: {
    name: 'foo',
    attributes: {
      onChange: action('onChange'),
      'data-foo': 'bar'
    }
  }
})

for (const [index, example] of Object.entries(
  processExampleData(examples.examples)
)) {
  stories.add(example.name, () => <Input {...example.data} />)
}
