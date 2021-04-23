import React from 'react';
import { storiesOf } from '@storybook/react';
import fixtures from 'govuk-frontend/govuk/components/table/fixtures.json';
import { Table } from '.';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('table', module);

for (const example of Object.values(
  processExampleData(
    fixtures.fixtures.filter((fixture) => !fixture.hidden),
    'table'
  )
)) {
  stories.add(example.name, () => <Table {...example.options} />);
}

stories.add('with reactListKey specified', () => {
  const props = { ...fixtures.fixtures[0].options };

  props.rows = props.rows.map((row, rowIndex) => ({
    ...row,
    cells: row.cells.map((cell, cellIndex) => ({
      ...cell,
      reactListKey: `your-stable-cell-key-here-${cellIndex}`,
    })),
    reactListKey: `your-stable-row-key-here-${rowIndex}`,
  }));
  return <Table {...props} />;
});
