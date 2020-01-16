import React from 'react';
import { storiesOf } from '@storybook/react';
import { Tabs } from '.';
import examples from './examples';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('tabs', module);

for (const example of Object.values(processExampleData(examples.examples))) {
  stories.add(example.name, () => <Tabs {...example.data} />);
}
