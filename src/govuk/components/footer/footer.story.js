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

stories.add('with reactListKey specified', () => {
  const props = { ...fixtures.fixtures[6].options };

  props.navigation = props.navigation.map((navigation, navIndex) => ({
    reactListKey: `your-stable-key-here-${navIndex}`,
    ...navigation,
    items: navigation.items
      ? navigation.items.map((item, index) => ({
          reactListKey: `your-stable-key-here-${index}`,
          ...item,
        }))
      : null,
  }));

  props.meta.items = props.meta.items.map((item, index) => ({
    reactListKey: `your-stable-key-here-${index}`,
    ...item,
  }));

  return <Footer {...props} />;
});
