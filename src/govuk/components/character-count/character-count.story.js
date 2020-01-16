import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { CharacterCount as CharacterCountComponent } from '.';
import examples from './examples';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('character-count', module);

const CharacterCount = props => {
  const { value: initialValue, ...restProps } = props;
  const [value, setValue] = useState(initialValue);

  const onChangeHandler = e => {
    setValue(e.target.value);
  };

  return (
    <CharacterCountComponent
      onChange={onChangeHandler}
      value={value}
      {...restProps}
    />
  );
};

for (const example of Object.values(
  processExampleData(examples.examples, 'character-component')
)) {
  stories.add(example.name, () => <CharacterCount {...example.data} />);
}
