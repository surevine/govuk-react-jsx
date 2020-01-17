import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Checkboxes as CheckboxesComponent } from '.';
import examples from './examples';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('checkboxes', module);

const Checkboxes = props => {
  const { items } = props;
  const initialValue = items.reduce((accumulator, item) => {
    accumulator[item.value] = !!item.checked;
    return accumulator;
  }, {});

  const [values, setValue] = useState(initialValue);

  const onChangeHandler = e => {
    setValue({
      ...values,
      [e.target.value]: !values[e.target.value],
    });
  };

  items.forEach(item => {
    item.checked = values[item.value];
  });

  return <CheckboxesComponent onChange={onChangeHandler} {...props} />;
};

for (const example of Object.values(
  processExampleData(examples.examples, 'checkboxes')
)) {
  stories.add(example.name, () => <Checkboxes {...example.data} />);
}
