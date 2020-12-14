import React from 'react';
import { storiesOf } from '@storybook/react';
import fixtures from 'govuk-frontend/govuk/components/tag/fixtures.json';
import { Tag } from '.';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('tag', module);

for (const example of Object.values(
  processExampleData(fixtures.fixtures.filter((fixture) => !fixture.hidden))
)) {
  stories.add(example.name, () => <Tag {...example.options} />);
}
