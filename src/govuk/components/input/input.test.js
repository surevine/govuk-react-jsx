import React from 'react';
import { render } from '@testing-library/react';
import fixtures from 'govuk-frontend/govuk/components/input/fixtures.json';
import { Input } from '.';

describe('input', () => {
  it('correctly assigns a ref', () => {
    const ref = React.createRef();
    const { container } = render(
      <Input {...fixtures.fixtures[0].options} ref={ref} onChange={() => {}} />
    );

    expect(ref.current).toEqual(container.querySelector('input'));
  });
});
