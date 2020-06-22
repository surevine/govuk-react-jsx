import React from 'react';
import { render } from '@testing-library/react';
import examples from './examples';
import { Select } from '.';

describe('select', () => {
  it('correctly assigns a ref', () => {
    const ref = React.createRef();
    const { container } = render(
      <Select {...examples.examples[0].data} ref={ref} />
    );

    expect(ref.current).toEqual(container.querySelector('select'));
  });
});
