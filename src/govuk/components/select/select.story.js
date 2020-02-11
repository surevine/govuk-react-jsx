import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Select as SelectComponent } from '.';
import examples from './examples';
import processExampleData from '../../../../utils/processExampleData';
import { WithRef } from '../../../../utils/WithRef';

const stories = storiesOf('select', module);

const Select = React.forwardRef((props, ref) => {
  const { value: initialValue, ...restProps } = props;
  const [value, setValue] = useState(initialValue);

  const onChangeHandler = e => {
    setValue(e.target.value);
  };

  return (
    <SelectComponent
      ref={ref}
      onChange={onChangeHandler}
      value={value}
      {...restProps}
    />
  );
});

Select.displayName = 'Select';

for (const example of Object.values(
  processExampleData(examples.examples, 'select')
)) {
  stories.add(example.name, () => <Select {...example.data} />);
}

stories.add('with ref', () => (
  <WithRef Component={Select} {...examples.examples[0].data} />
));
