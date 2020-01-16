import React from 'react';
import { storiesOf } from '@storybook/react';
import { Footer } from '.';
import examples from './examples';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('footer', module);

for (const example of Object.values(processExampleData(examples.examples))) {
  stories.add(example.name, () => <Footer {...example.data} />);
}
