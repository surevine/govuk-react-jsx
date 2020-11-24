import React from 'react';
import { storiesOf } from '@storybook/react';
import fixtures from 'govuk-frontend/govuk/components/notification-banner/fixtures.json';
import { NotificationBanner } from '.';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('notification-banner', module);

for (const example of Object.values(
  processExampleData(fixtures.fixtures.filter((fixture) => !fixture.hidden))
)) {
  stories.add(example.name, () => <NotificationBanner {...example.options} />);
}
