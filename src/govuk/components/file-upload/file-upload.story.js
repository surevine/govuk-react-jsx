import React from 'react';
import { storiesOf } from '@storybook/react';
import { FileUpload } from '.';
import examples from './examples';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('file-upload', module);

for (const example of Object.values(processExampleData(examples.examples))) {
  stories.add(example.name, () => <FileUpload {...example.data} />);
}
