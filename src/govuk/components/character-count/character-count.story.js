import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { CharacterCount as CharacterCountComponent } from '.';
import fixtures from 'govuk-frontend/govuk/components/character-count/fixtures.json';
import processExampleData from '../../../../utils/processExampleData';
import { WithRef } from '../../../../utils/WithRef';

const stories = storiesOf('character-count', module);

const CharacterCount = React.forwardRef((props, ref) => {
  const { value: initialValue, ...restProps } = props;
  const [value, setValue] = useState(initialValue);

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <CharacterCountComponent
      ref={ref}
      onChange={onChangeHandler}
      value={value}
      {...restProps}
    />
  );
});

CharacterCount.displayName = 'CharacterCount';

for (const example of Object.values(
  processExampleData(fixtures.fixtures, 'character-component')
)) {
  stories.add(example.name, () => <CharacterCount {...example.options} />);
}

stories.add('with ref', () => (
  <WithRef Component={CharacterCount} {...fixtures.fixtures[0].options} />
));
