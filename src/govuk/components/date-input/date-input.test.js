import React from 'react';
import { render } from '@testing-library/react';
import fixtures from 'govuk-frontend/govuk/components/date-input/fixtures.json';
import { DateInput } from '.';

describe('date input', () => {
  it('correctly assigns a ref', () => {
    const data = { ...fixtures.fixtures[1].options };
    const ref = React.createRef();

    data.items[0].ref = ref;

    const { container } = render(<DateInput {...data} onChange={() => {}} />);

    expect(ref.current).toEqual(container.querySelector('input'));
  });
});
