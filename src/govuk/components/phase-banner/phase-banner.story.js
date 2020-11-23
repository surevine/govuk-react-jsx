import React from 'react';
import { storiesOf } from '@storybook/react';
import fixtures from 'govuk-frontend/govuk/components/phase-banner/fixtures.json';
import { PhaseBanner } from '.';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('phase-banner', module);

for (const example of Object.values(
  processExampleData(fixtures.fixtures.filter((fixture) => !fixture.hidden))
)) {
  stories.add(example.name, () => <PhaseBanner {...example.options} />);
}
