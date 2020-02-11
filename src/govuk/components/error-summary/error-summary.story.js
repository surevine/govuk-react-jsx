import React from 'react';
import { storiesOf } from '@storybook/react';
import { ErrorSummary } from '.';
import { Input } from '../input';
import examples from './examples';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('error-summary', module);

for (const example of Object.values(processExampleData(examples.examples))) {
  stories.add(example.name, () => <ErrorSummary {...example.data} />);
}

stories.add('Error summary linking to input', () => (
  <>
    <ErrorSummary
      errorList={[
        {
          children: 'Error message linking to input field in error state',
          href: '#foo',
        },
      ]}
    />

    <Input
      name="foo"
      id="foo"
      label={{ children: 'Input field in error state' }}
      errorMessage={{ children: 'Error message here' }}
    />
  </>
));
