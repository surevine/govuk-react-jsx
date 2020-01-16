import React from 'react';
import { storiesOf } from '@storybook/react';
import { PhaseBanner } from '.';
import examples from './examples';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('phase-banner', module);

for (const example of Object.values(processExampleData(examples.examples))) {
  stories.add(example.name, () => <PhaseBanner {...example.data} />);
}
