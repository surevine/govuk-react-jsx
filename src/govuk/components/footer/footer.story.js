import React from 'react';
import { storiesOf } from '@storybook/react';
import { Footer } from '.';
import fixtures from 'govuk-frontend/govuk/components/footer/fixtures.json';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('footer', module);

for (const example of Object.values(processExampleData(fixtures.fixtures))) {
  stories.add(example.name, () => <Footer {...example.options} />);
}
