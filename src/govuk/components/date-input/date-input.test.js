import React from 'react';
import { render } from '@testing-library/react';
import examples from './examples';
import { DateInput } from '.';

describe('date input', () => {
  it('correctly assigns a ref', () => {
    const data = { ...examples.examples[0].data };
    const ref = React.createRef();

    data.items[0].ref = ref;

    const { container } = render(<DateInput {...data} onChange={() => {}} />);

    expect(ref.current).toEqual(container.querySelector('input'));
  });
});
