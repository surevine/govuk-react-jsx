import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Select as SelectComponent } from '.'
import examples from './examples'
import processExampleData from '../../../../utils/processExampleData'

const stories = storiesOf('select', module)

const Select = (props) => {
  const { value: initialValue, ...restProps } = props
  const [value, setValue] = useState(initialValue)

  const onChangeHandler = (e) => {
    setValue(e.target.value)
  }

  return <SelectComponent onChange={onChangeHandler} value={value} {...restProps} />
}

for (const [index, example] of Object.entries(
  processExampleData(examples.examples, 'select')
)) {
  stories.add(example.name, () => {
    return <Select {...example.data} />
  })
}
