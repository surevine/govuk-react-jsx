import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import fixtures from 'govuk-frontend/govuk/components/checkboxes/fixtures.json';
import { Checkboxes as CheckboxesComponent } from '.';
import processExampleData from '../../../../utils/processExampleData';
import { WithItemRefs } from '../../../../utils/WithRef';

const stories = storiesOf('checkboxes', module);

const Checkboxes = (props) => {
  const { items } = props;
  const initialValue = items.reduce((accumulator, item) => {
    accumulator[item.value] = !!item.checked;
    return accumulator;
  }, {});

  const [values, setValue] = useState(initialValue);

  const onChangeHandler = (e) => {
    setValue({
      ...values,
      [e.target.value]: !values[e.target.value],
    });
  };

  items.forEach((item) => {
    item.checked = values[item.value];
  });

  return <CheckboxesComponent onChange={onChangeHandler} {...props} />;
};

for (const example of Object.values(
  processExampleData(
    fixtures.fixtures.filter((fixture) => !fixture.hidden),
    'checkboxes'
  )
)) {
  stories.add(example.name, () => <Checkboxes {...example.options} />);
}

stories.add('with ref', () => (
  <WithItemRefs Component={Checkboxes} {...fixtures.fixtures[0].options} />
));

stories.add('with reactListKey specified', () => {
  const props = { ...fixtures.fixtures[0].options };

  props.items = props.items.map((item, index) => ({
    reactListKey: `your-stable-key-here-${index}`,
    ...item,
  }));
  return <Checkboxes {...props} />;
});
