import React from 'react';
import { storiesOf } from '@storybook/react';
import { Fieldset } from '.';
import examples from './examples';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('fieldset', module);

for (const example of Object.values(processExampleData(examples.examples))) {
  stories.add(example.name, () => <Fieldset {...example.data} />);
}
