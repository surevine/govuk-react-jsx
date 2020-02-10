import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Input } from '.';
import examples from './examples';
import processExampleData from '../../../../utils/processExampleData';
import WithRef from '../../../../utils/WithRef';

const stories = storiesOf('input', module);

// React specific examples - these don't get pumped into the tests
examples.examples.push({
  name: 'With onChange event',
  data: {
    name: 'foo',
    attributes: {
      onChange: action('onChange'),
      'data-foo': 'bar',
    },
  },
});

for (const example of Object.values(processExampleData(examples.examples))) {
  stories.add(example.name, () => <Input {...example.data} />);
}

stories.add('With ref', () => (
  <WithRef Component={Input} {...examples.examples[0].data} />
));
