import React from 'react';
import { storiesOf } from '@storybook/react';
import { SummaryList } from '.';
import examples from './examples';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('summary-list', module);

for (const example of Object.values(processExampleData(examples.examples))) {
  stories.add(example.name, () => <SummaryList {...example.data} />);
}
