import React from 'react';
import { storiesOf } from '@storybook/react';
import fixtures from 'govuk-frontend/govuk/components/summary-list/fixtures.json';
import { SummaryList } from '.';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('summary-list', module);

for (const example of Object.values(
  processExampleData(fixtures.fixtures.filter((fixture) => !fixture.hidden))
)) {
  stories.add(example.name, () => <SummaryList {...example.options} />);
}
