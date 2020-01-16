import React from 'react';
import { storiesOf } from '@storybook/react';
import { ErrorSummary } from '.';
import examples from './examples';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('error-summary', module);

for (const example of Object.values(processExampleData(examples.examples))) {
  stories.add(example.name, () => <ErrorSummary {...example.data} />);
}
