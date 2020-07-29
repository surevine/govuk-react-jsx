import React from 'react';
import { render } from '@testing-library/react';
import examples from './examples';
import processExampleData from '../../../../utils/processExampleData';
import { Select } from '.';

describe('select', () => {
  it('correctly assigns a ref', () => {
    const ref = React.createRef();
    const { container } = render(
      <Select
        {...processExampleData(examples.examples[0].data, 'select')}
        onChange={() => {}}
        ref={ref}
      />
    );

    expect(ref.current).toEqual(container.querySelector('select'));
  });
});
