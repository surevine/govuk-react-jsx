import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import fixtures from 'govuk-frontend/govuk/components/textarea/fixtures.json';
import { Textarea as TextareaComponent } from '.';
import processExampleData from '../../../../utils/processExampleData';
import { WithRef } from '../../../../utils/WithRef';

const stories = storiesOf('textarea', module);

const Textarea = React.forwardRef((props, ref) => {
  const { value: initialValue, ...restProps } = props;
  const [value, setValue] = useState(initialValue);

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <TextareaComponent
      ref={ref}
      onChange={onChangeHandler}
      value={value}
      {...restProps}
    />
  );
});

Textarea.displayName = 'Textarea';

for (const example of Object.values(
  processExampleData(
    fixtures.fixtures.filter((fixture) => !fixture.hidden),
    'textarea'
  )
)) {
  stories.add(example.name, () => <Textarea {...example.options} />);
}

stories.add('with ref', () => (
  <WithRef Component={Textarea} {...fixtures.fixtures[0].options} />
));
