import React from 'react';
import { storiesOf } from '@storybook/react';
import { Breadcrumbs } from '.';
import examples from './examples';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('breadcrumbs', module);

for (const [index, example] of Object.entries(
  processExampleData(examples.examples)
)) {
  stories.add(example.name, () => <Breadcrumbs {...example.data} />);
}
