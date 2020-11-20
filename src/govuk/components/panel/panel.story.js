import React from 'react';
import { storiesOf } from '@storybook/react';
import { Panel } from '.';
import fixtures from 'govuk-frontend/govuk/components/panel/fixtures.json';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('panel', module);

for (const example of Object.values(processExampleData(fixtures.fixtures))) {
  stories.add(example.name, () => <Panel {...example.options} />);
}
