import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Checkboxes as CheckboxesComponent } from './'
import examples from './examples'
import processExampleData from '../../../../utils/processExampleData'

const stories = storiesOf('checkboxes', module)

const Checkboxes = (props) => {
  const initialValue = props.items.reduce((accumulator, item) => {
      accumulator[item.value] = !!item.checked
    return accumulator
  }, {})

  const [values, setValue] = useState(initialValue)

  const onChangeHandler = (e) => {
    setValue({
      ...values,
      [e.target.value]: !values[e.target.value]
    })
  }

  props.items.forEach(item => {
    item.onChange = onChangeHandler
    item.checked = values[item.value]
  })

  return <CheckboxesComponent {...props} />
}

for (const [index, example] of Object.entries(
  processExampleData(examples.examples, 'checkboxes')
)) {
  stories.add(example.name, () => {
    return <Checkboxes {...example.data} />
  })
}
