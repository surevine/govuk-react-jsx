import React from 'react';
import { storiesOf } from '@storybook/react';
import { ErrorMessage } from '.';
import fixtures from 'govuk-frontend/govuk/components/error-message/fixtures.json';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('error-message', module);

for (const example of Object.values(processExampleData(fixtures.fixtures))) {
  stories.add(example.name, () => <ErrorMessage {...example.options} />);
}
