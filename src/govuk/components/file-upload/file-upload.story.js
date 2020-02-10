import React from 'react';
import { storiesOf } from '@storybook/react';
import { FileUpload } from '.';
import examples from './examples';
import processExampleData from '../../../../utils/processExampleData';
import { WithRef } from '../../../../utils/WithRef';

const stories = storiesOf('file-upload', module);

for (const example of Object.values(processExampleData(examples.examples))) {
  stories.add(example.name, () => <FileUpload {...example.data} />);
}

stories.add('with ref', () => (
  <WithRef Component={FileUpload} {...examples.examples[0].data} />
));
