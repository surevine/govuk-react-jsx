import React from 'react';
import { render } from '@testing-library/react';
import fixtures from 'govuk-frontend/govuk/components/button/fixtures.json';
import { Button } from '.';

describe('button', () => {
  it('correctly assigns a ref', () => {
    const ref = React.createRef();
    const { container } = render(
      <Button {...fixtures.fixtures[0].options} ref={ref} />
    );

    expect(ref.current).toEqual(container.querySelector('button'));
  });
});
