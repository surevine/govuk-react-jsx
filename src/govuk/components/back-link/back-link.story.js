import React from 'react';
import { storiesOf } from '@storybook/react';
import fixtures from 'govuk-frontend/govuk/components/back-link/fixtures.json';
import { BackLink } from '.';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('back-link', module);

for (const example of Object.values(
  processExampleData(fixtures.fixtures.filter((fixture) => !fixture.hidden))
)) {
  stories.add(example.name, () => <BackLink {...example.data} />);
}
