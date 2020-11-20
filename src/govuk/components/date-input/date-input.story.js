import React from 'react';
import { storiesOf } from '@storybook/react';
import { DateInput } from '.';
import fixtures from 'govuk-frontend/govuk/components/date-input/fixtures.json';
import processExampleData from '../../../../utils/processExampleData';
import { WithItemRefs } from '../../../../utils/WithRef';

const stories = storiesOf('date-input', module);

for (const example of Object.values(processExampleData(fixtures.fixtures))) {
  stories.add(example.name, () => <DateInput {...example.options} />);
}

stories.add('with ref', () => (
  <WithItemRefs Component={DateInput} {...fixtures.fixtures[0].options} />
));
