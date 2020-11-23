import React from 'react';
import { storiesOf } from '@storybook/react';
import fixtures from 'govuk-frontend/govuk/components/footer/fixtures.json';
import { Footer } from '.';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('footer', module);

for (const example of Object.values(
  processExampleData(fixtures.fixtures.filter((fixture) => !fixture.hidden))
)) {
  stories.add(example.name, () => <Footer {...example.options} />);
}
