import React from 'react';
import { render } from '@testing-library/react';
import examples from './examples';
import { Button } from '.';

describe('button', () => {
  it('correctly assigns a ref', () => {
    const ref = React.createRef();
    const { container } = render(
      <Button {...examples.examples[0].data} ref={ref} />
    );

    expect(ref.current).toEqual(container.querySelector('button'));
  });
});
