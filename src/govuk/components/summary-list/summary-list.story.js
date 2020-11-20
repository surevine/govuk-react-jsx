import React from 'react';
import { storiesOf } from '@storybook/react';
import { SummaryList } from '.';
import fixtures from 'govuk-frontend/govuk/components/summary-list/fixtures.json';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('summary-list', module);

for (const example of Object.values(processExampleData(fixtures.fixtures))) {
  stories.add(example.name, () => <SummaryList {...example.options} />);
}
