import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Radios as RadiosComponent } from '.';
import examples from './examples';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('radios', module);

const Radios = props => {
  const { items, value: initialValue, ...restProps } = props;
  const [value, setValue] = useState(initialValue);
  const onChangeHandler = e => {
    setValue(e.target.value);
  };

  const modifiedItems = items.map(item => ({
    ...item,
    onChange: onChangeHandler,
  }));

  return <RadiosComponent value={value} items={modifiedItems} {...restProps} />;
};

for (const [index, example] of Object.entries(
  processExampleData(examples.examples, 'radios')
)) {
  stories.add(example.name, () => <Radios {...example.data} />);
}
