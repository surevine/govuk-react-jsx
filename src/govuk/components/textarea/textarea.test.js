import React from 'react';
import { render } from '@testing-library/react';
import fixtures from 'govuk-frontend/govuk/components/textarea/fixtures.json';
import { Textarea } from '.';

describe('textarea', () => {
  it('correctly assigns a ref', () => {
    const ref = React.createRef();
    const { container } = render(
      <Textarea
        {...fixtures.fixtures[0].options}
        ref={ref}
        onChange={() => {}}
      />
    );

    expect(ref.current).toEqual(container.querySelector('textarea'));
  });
});
