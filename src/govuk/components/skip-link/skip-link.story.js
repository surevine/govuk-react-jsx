import React from 'react';
import { storiesOf } from '@storybook/react';
import fixtures from 'govuk-frontend/govuk/components/skip-link/fixtures.json';
import { SkipLink } from '.';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('skip-link', module);

for (const example of Object.values(
  processExampleData(fixtures.fixtures.filter((fixture) => !fixture.hidden))
)) {
  stories.add(example.name, () => <SkipLink {...example.options} />);
}
