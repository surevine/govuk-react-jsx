import React from 'react';
import { storiesOf } from '@storybook/react';
import { Tag } from '.';
import fixtures from 'govuk-frontend/govuk/components/tag/fixtures.json';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('tag', module);

for (const example of Object.values(processExampleData(fixtures.fixtures))) {
  stories.add(example.name, () => <Tag {...example.options} />);
}
