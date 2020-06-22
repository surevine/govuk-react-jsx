import React from 'react';
import { render } from '@testing-library/react';
import examples from './examples';
import { CharacterCount } from '.';

describe('character count', () => {
  it('correctly assigns a ref', () => {
    const ref = React.createRef();
    const { container } = render(
      <CharacterCount
        {...examples.examples[0].data}
        ref={ref}
        onChange={() => {}}
      />
    );

    expect(ref.current).toEqual(container.querySelector('textarea'));
  });
});
