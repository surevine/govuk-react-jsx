import React from 'react';
import { render } from '@testing-library/react';
import fixtures from 'govuk-frontend/govuk/components/character-count/fixtures.json';
import { CharacterCount } from '.';

describe('character count', () => {
  it('correctly assigns a ref', () => {
    const ref = React.createRef();
    const { container } = render(
      <CharacterCount
        {...fixtures.fixtures[0].options}
        ref={ref}
        onChange={() => {}}
      />
    );

    expect(ref.current).toEqual(container.querySelector('textarea'));
  });
});
