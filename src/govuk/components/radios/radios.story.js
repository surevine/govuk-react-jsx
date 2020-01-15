import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Radios } from '.'
import examples from './examples'
import processExampleData from '../../../../utils/processExampleData'

const stories = storiesOf('radios', module)

const RadioDemo = (props) => {
  const {items, value: initialValue, ...restProps} = props
  const [value, setValue] = useState(initialValue)
  const onChangeHandler = (e) => {
    setValue(e.target.value)
  }

  const modifiedItems = items.map(item => ({
    ...item,
    onChange: onChangeHandler
  }))

  return <Radios value={value} items={modifiedItems} {...restProps} />
}

for (const [index, example] of Object.entries(
  processExampleData(examples.examples, 'radios')
)) {
  stories.add(example.name,  () => {
    return <RadioDemo {...example.data} />
  })
}
