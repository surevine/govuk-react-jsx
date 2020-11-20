import React from 'react';
import { storiesOf } from '@storybook/react';
import { SkipLink } from '.';
import fixtures from 'govuk-frontend/govuk/components/skip-link/fixtures.json';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('skip-link', module);

for (const example of Object.values(processExampleData(fixtures.fixtures))) {
  stories.add(example.name, () => <SkipLink {...example.options} />);
}
