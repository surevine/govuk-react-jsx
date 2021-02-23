import React from 'react';
import { storiesOf } from '@storybook/react';
import fixtures from 'govuk-frontend/govuk/components/cookie-banner/fixtures.json';
import { CookieBanner } from '.';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('cookie-banner', module);

for (const example of Object.values(
  // processExampleData(fixtures.fixtures.filter((fixture) => !fixture.hidden))
  processExampleData(fixtures.fixtures, 'cookie-banner')
)) {
  stories.add(example.name, () => <CookieBanner {...example.options} />);
}
