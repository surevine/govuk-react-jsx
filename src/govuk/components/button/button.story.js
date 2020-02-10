import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '.';
import examples from './examples';
import processExampleData from '../../../../utils/processExampleData';
import WithRef from '../../../../utils/WithRef';

const stories = storiesOf('button', module);

for (const example of Object.values(processExampleData(examples.examples))) {
  stories.add(example.name, () => <Button {...example.data} />);
}

stories.add('With ref', () => (
  <WithRef Component={Button} {...examples.examples[0].data} />
));
