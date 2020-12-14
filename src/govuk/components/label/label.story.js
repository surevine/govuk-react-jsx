import React from 'react';
import { storiesOf } from '@storybook/react';
import fixtures from 'govuk-frontend/govuk/components/label/fixtures.json';
import { Label } from '.';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('label', module);

for (const example of Object.values(
  processExampleData(fixtures.fixtures.filter((fixture) => !fixture.hidden))
)) {
  stories.add(example.name, () => <Label {...example.options} />);
}
