import React from 'react';
import { storiesOf } from '@storybook/react';
import { Label } from '.';
import examples from './examples';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('label', module);

for (const example of Object.values(processExampleData(examples.examples))) {
  stories.add(example.name, () => <Label {...example.data} />);
}
