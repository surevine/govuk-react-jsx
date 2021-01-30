import React from 'react';
import { storiesOf } from '@storybook/react';
import fixtures from 'govuk-frontend/govuk/components/file-upload/fixtures.json';
import { FileUpload } from '.';
import processExampleData from '../../../../utils/processExampleData';
import { WithRef } from '../../../../utils/WithRef';

const stories = storiesOf('file-upload', module);

for (const example of Object.values(
  processExampleData(fixtures.fixtures.filter((fixture) => !fixture.hidden))
)) {
  if (example.name !== 'with value') {
    // React gets upset if you try and set a value on a file input so we exclude this example
    stories.add(example.name, () => <FileUpload {...example.options} />);
  }
}

stories.add('with ref', () => (
  <WithRef Component={FileUpload} {...fixtures.fixtures[0].options} />
));
