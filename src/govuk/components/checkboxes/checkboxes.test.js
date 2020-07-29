import React from 'react';
import { render } from '@testing-library/react';
import examples from './examples';
import { Checkboxes } from '.';

describe('checkboxes', () => {
  it('correctly assigns a ref', () => {
    const data = { ...examples.examples[0].data };
    const ref = React.createRef();

    data.items[0].ref = ref;

    const { container } = render(<Checkboxes {...data} onChange={() => {}} />);

    expect(ref.current).toEqual(container.querySelector('input'));
  });
});
