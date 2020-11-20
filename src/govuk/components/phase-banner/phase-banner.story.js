import React from 'react';
import { storiesOf } from '@storybook/react';
import { PhaseBanner } from '.';
import fixtures from 'govuk-frontend/govuk/components/phase-banner/fixtures.json';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('phase-banner', module);

for (const example of Object.values(processExampleData(fixtures.fixtures))) {
  stories.add(example.name, () => <PhaseBanner {...example.options} />);
}
