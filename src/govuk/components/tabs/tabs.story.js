import React from 'react';
import { storiesOf } from '@storybook/react';
import fixtures from 'govuk-frontend/govuk/components/tabs/fixtures.json';
import { Tabs } from '.';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('tabs', module);

for (const example of Object.values(
  processExampleData(fixtures.fixtures.filter((fixture) => !fixture.hidden))
)) {
  stories.add(example.name, () => <Tabs {...example.options} />);
}
