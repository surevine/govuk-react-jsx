import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Radios as RadiosComponent } from '.';
import examples from './examples';
import processExampleData from '../../../../utils/processExampleData';
import { WithItemRefs } from '../../../../utils/WithRef';

const stories = storiesOf('radios', module);

const Radios = props => {
  const { items, value: initialValue, ...restProps } = props;
  const [value, setValue] = useState(initialValue);
  const onChangeHandler = e => {
    setValue(e.target.value);
  };

  return (
    <RadiosComponent
      onChange={onChangeHandler}
      value={value}
      items={items}
      {...restProps}
    />
  );
};

for (const example of Object.values(
  processExampleData(examples.examples, 'radios')
)) {
  stories.add(example.name, () => <Radios {...example.data} />);
}

stories.add('with ref', () => (
  <WithItemRefs Component={Radios} {...examples.examples[0].data} />
));
