import React from 'react';
import { storiesOf } from '@storybook/react';
import { WarningText } from '.';
import examples from './examples';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('warning-text', module);

for (const example of Object.values(processExampleData(examples.examples))) {
  stories.add(example.name, () => <WarningText {...example.data} />);
}
