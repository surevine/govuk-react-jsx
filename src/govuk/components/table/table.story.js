import React from 'react';
import { storiesOf } from '@storybook/react';
import fixtures from 'govuk-frontend/govuk/components/table/fixtures.json';
import { Table } from '.';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('table', module);

for (const example of Object.values(
  processExampleData(fixtures.fixtures.filter((fixture) => !fixture.hidden))
)) {
  stories.add(example.name, () => <Table {...example.options} />);
}
