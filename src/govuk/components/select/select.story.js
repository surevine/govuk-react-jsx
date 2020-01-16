import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Select as SelectComponent } from '.';
import examples from './examples';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('select', module);

const Select = props => {
  const { value: initialValue, ...restProps } = props;
  const [value, setValue] = useState(initialValue);

  const onChangeHandler = e => {
    setValue(e.target.value);
  };

  return (
    <SelectComponent onChange={onChangeHandler} value={value} {...restProps} />
  );
};

for (const example of Object.values(
  processExampleData(examples.examples, 'select')
)) {
  stories.add(example.name, () => <Select {...example.data} />);
}
