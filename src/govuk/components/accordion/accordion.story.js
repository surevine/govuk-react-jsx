import React from 'react'
import { storiesOf } from '@storybook/react'
import Accordion from '.'
import examples from '../../../../.cache/govuk-frontend-examples/accordion.yaml'
import processExampleData from '../../../../utils/processExampleData'

const stories = storiesOf('accordion', module)

for (const [index, example] of Object.entries(examples.examples)) {
  // Process the example data to turn html strings into jsx and to re-map params as necessary
  const [data, children] = processExampleData(example.data)

  console.log(data)

  stories.add(example.name, () => (
    <>
      {example.description && (
        <p className="govuk-body">{example.description}</p>
      )}
      <Accordion {...data} />
    </>
  ))
}
