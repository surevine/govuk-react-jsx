import React from 'react';
import { storiesOf } from '@storybook/react';
import { ErrorMessage } from '.';
import examples from './examples';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('error-message', module);

for (const example of Object.values(processExampleData(examples.examples))) {
  stories.add(example.name, () => <ErrorMessage {...example.data} />);
}
