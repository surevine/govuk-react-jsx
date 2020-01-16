import React from 'react';
import { storiesOf } from '@storybook/react';
import { BackLink } from '.';
import examples from './examples';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('back-link', module);

for (const example of Object.values(processExampleData(examples.examples))) {
  stories.add(example.name, () => <BackLink {...example.data} />);
}
