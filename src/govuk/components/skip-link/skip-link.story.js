import React from 'react';
import { storiesOf } from '@storybook/react';
import { SkipLink } from '.';
import examples from './examples';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('skip-link', module);

for (const example of Object.values(processExampleData(examples.examples))) {
  stories.add(example.name, () => <SkipLink {...example.data} />);
}
