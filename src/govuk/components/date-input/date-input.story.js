import React from 'react';
import { storiesOf } from '@storybook/react';
import { DateInput } from '.';
import examples from './examples';
import processExampleData from '../../../../utils/processExampleData';
import { WithItemRefs } from '../../../../utils/WithRef';

const stories = storiesOf('date-input', module);

for (const example of Object.values(processExampleData(examples.examples))) {
  stories.add(example.name, () => <DateInput {...example.data} />);
}

stories.add('with ref', () => (
  <WithItemRefs Component={DateInput} {...examples.examples[0].data} />
));
