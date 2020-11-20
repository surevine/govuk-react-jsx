import React from 'react';
import { render } from '@testing-library/react';
import fixtures from 'govuk-frontend/govuk/components/radios/fixtures.json';
import { Radios } from '.';

describe('radios', () => {
  it('top level value prop maps correctly to checked items', () => {
    const { getByDisplayValue } = render(
      <Radios
        value="no"
        items={[
          {
            children: ['Yes'],
            value: 'yes',
          },
          {
            children: ['No'],
            value: 'no',
          },
        ]}
        name="yesno"
        onChange={() => {}}
      />
    );

    expect(getByDisplayValue('yes').checked).toEqual(false);
    expect(getByDisplayValue('no').checked).toEqual(true);
  });

  it('correctly assigns a ref', () => {
    const data = { ...fixtures.fixtures[0].options };
    const ref = React.createRef();

    data.items[0].ref = ref;

    const { container } = render(<Radios {...data} onChange={() => {}} />);

    expect(ref.current).toEqual(container.querySelector('input'));
  });
});
