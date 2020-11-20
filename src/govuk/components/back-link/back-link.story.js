import React from 'react';
import { storiesOf } from '@storybook/react';
import { BackLink } from '.';
import fixtures from 'govuk-frontend/govuk/components/back-link/fixtures.json';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('back-link', module);

for (const example of Object.values(processExampleData(fixtures.fixtures))) {
  stories.add(example.name, () => <BackLink {...example.data} />);
}
