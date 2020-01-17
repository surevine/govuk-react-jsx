import React from 'react';
import { storiesOf } from '@storybook/react';
import { DateInput } from '.';
import examples from './examples';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('date-input', module);

for (const example of Object.values(processExampleData(examples.examples))) {
  stories.add(example.name, () => <DateInput {...example.data} />);
}
