import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import fixtures from 'govuk-frontend/govuk/components/radios/fixtures.json';
import { Radios as RadiosComponent } from '.';
import processExampleData from '../../../../utils/processExampleData';
import { WithItemRefs } from '../../../../utils/WithRef';

const stories = storiesOf('radios', module);

const Radios = (props) => {
  const { items, value: initialValue, ...restProps } = props;
  const [value, setValue] = useState(initialValue);
  const onChangeHandler = (e) => {
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
  processExampleData(
    fixtures.fixtures.filter((fixture) => !fixture.hidden),
    'radios'
  )
)) {
  stories.add(example.name, () => <Radios {...example.options} />);
}

stories.add('with ref', () => (
  <WithItemRefs Component={Radios} {...fixtures.fixtures[0].options} />
));

stories.add('with reactListKey specified', () => {
  const props = { ...fixtures.fixtures[0].options };

  props.items = props.items.map((item, index) => ({
    reactListKey: `your-stable-key-here-${index}`,
    ...item,
  }));

  return <Radios {...props} />;
});
