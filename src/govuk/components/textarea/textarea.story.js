import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Textarea as TextareaComponent } from '.'
import examples from './examples'
import processExampleData from '../../../../utils/processExampleData'

const stories = storiesOf('textarea', module)

const Textarea = (props) => {
  const { value: initialValue, ...restProps } = props
  const [value, setValue] = useState(initialValue)

  const onChangeHandler = (e) => {
    setValue(e.target.value)
  }

  return <TextareaComponent onChange={onChangeHandler} value={value} {...restProps} />
}

for (const [index, example] of Object.entries(
  processExampleData(examples.examples, 'textarea')
)) {
  stories.add(example.name, () => {
    return <Textarea {...example.data} />
  })
}
