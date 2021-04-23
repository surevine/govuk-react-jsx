import React from 'react';
import { storiesOf } from '@storybook/react';
import fixtures from 'govuk-frontend/govuk/components/accordion/fixtures.json';
import { Accordion } from '.';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('accordion', module);

for (const example of Object.values(
  processExampleData(fixtures.fixtures.filter((fixture) => !fixture.hidden))
)) {
  stories.add(example.name, () => <Accordion {...example.options} />);
}

stories.add('with reactListKey specified', () => {
  const props = fixtures.fixtures[0].options;

  props.items = props.items.map((item, index) => {
    return {
      reactListKey: `your-stable-key-here-${index}`,
      ...item,
    };
  });
  return <Accordion {...props} />;
});
