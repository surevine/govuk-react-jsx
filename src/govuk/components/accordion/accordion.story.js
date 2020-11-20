import React from 'react';
import { storiesOf } from '@storybook/react';
import { Accordion } from '.';
import fixtures from 'govuk-frontend/govuk/components/accordion/fixtures.json';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('accordion', module);

for (const example of Object.values(processExampleData(fixtures.fixtures))) {
  stories.add(example.name, () => <Accordion {...example.options} />);
}
