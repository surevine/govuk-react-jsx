import React from 'react';
import { storiesOf } from '@storybook/react';
import { Table } from '.';
import examples from './examples';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('table', module);

for (const example of Object.values(processExampleData(examples.examples))) {
  stories.add(example.name, () => <Table {...example.data} />);
}
