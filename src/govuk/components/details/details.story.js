import React from 'react';
import { storiesOf } from '@storybook/react';
import { Details } from '.';
import examples from './examples';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('details', module);

for (const example of Object.values(processExampleData(examples.examples))) {
  stories.add(example.name, () => <Details {...example.data} />);
}
