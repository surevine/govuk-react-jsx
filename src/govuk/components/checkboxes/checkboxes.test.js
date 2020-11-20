import React from 'react';
import { render } from '@testing-library/react';
import fixtures from 'govuk-frontend/govuk/components/checkboxes/fixtures.json';
import { Checkboxes } from '.';

describe('checkboxes', () => {
  it('correctly assigns a ref', () => {
    const data = { ...fixtures.fixtures[0].options };
    const ref = React.createRef();

    data.items[0].ref = ref;

    const { container } = render(<Checkboxes {...data} onChange={() => {}} />);

    expect(ref.current).toEqual(container.querySelector('input'));
  });
});
