import React from 'react';
import { storiesOf } from '@storybook/react';
import { Accordion } from '.';
import examples from './examples';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('accordion', module);

for (const example of Object.values(processExampleData(examples.examples))) {
  stories.add(example.name, () => <Accordion {...example.data} />);
}
