import React from 'react';
import { render } from '@testing-library/react';
import fixtures from 'govuk-frontend/govuk/components/select/fixtures.json';
import processExampleData from '../../../../utils/processExampleData';
import { Select } from '.';

describe('select', () => {
  it('correctly assigns a ref', () => {
    const ref = React.createRef();
    const { container } = render(
      <Select
        {...processExampleData(fixtures.fixtures[0].options, 'select')}
        onChange={() => {}}
        ref={ref}
      />
    );

    expect(ref.current).toEqual(container.querySelector('select'));
  });
});
