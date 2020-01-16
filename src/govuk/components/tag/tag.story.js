import React from 'react';
import { storiesOf } from '@storybook/react';
import { Tag } from '.';
import examples from './examples';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('tag', module);

for (const example of Object.values(processExampleData(examples.examples))) {
  stories.add(example.name, () => <Tag {...example.data} />);
}
