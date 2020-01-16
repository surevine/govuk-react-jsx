import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '.';
import examples from './examples';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('button', module);

for (const example of Object.values(processExampleData(examples.examples))) {
  stories.add(example.name, () => <Button {...example.data} />);
}
