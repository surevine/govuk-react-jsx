import React from 'react';
import { storiesOf } from '@storybook/react';
import fixtures from 'govuk-frontend/govuk/components/date-input/fixtures.json';
import { DateInput } from '.';
import processExampleData from '../../../../utils/processExampleData';
import { WithItemRefs } from '../../../../utils/WithRef';

const stories = storiesOf('date-input', module);

for (const example of Object.values(
  processExampleData(fixtures.fixtures.filter((fixture) => !fixture.hidden))
)) {
  stories.add(example.name, () => <DateInput {...example.options} />);
}

stories.add('with ref', () => (
  <WithItemRefs Component={DateInput} {...fixtures.fixtures[1].options} />
));

stories.add('with reactListKey specified', () => {
  const props = { ...fixtures.fixtures[1].options };

  props.items = props.items.map((item, index) => ({
    reactListKey: `your-stable-key-here-${index}`,
    ...item,
  }));
  return <DateInput {...props} />;
});
