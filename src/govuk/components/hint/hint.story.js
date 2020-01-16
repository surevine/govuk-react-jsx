import React from 'react';
import { storiesOf } from '@storybook/react';
import { Hint } from '.';
import examples from './examples';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('hint', module);

for (const example of Object.values(processExampleData(examples.examples))) {
  stories.add(example.name, () => <Hint {...example.data} />);
}
