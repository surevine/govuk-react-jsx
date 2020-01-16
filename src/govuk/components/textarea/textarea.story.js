import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Textarea as TextareaComponent } from '.';
import examples from './examples';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('textarea', module);

const Textarea = props => {
  const { value: initialValue, ...restProps } = props;
  const [value, setValue] = useState(initialValue);

  const onChangeHandler = e => {
    setValue(e.target.value);
  };

  return (
    <TextareaComponent
      onChange={onChangeHandler}
      value={value}
      {...restProps}
    />
  );
};

for (const example of Object.values(
  processExampleData(examples.examples, 'textarea')
)) {
  stories.add(example.name, () => <Textarea {...example.data} />);
}
