import React from 'react';
import { render } from '@testing-library/react';
import examples from './examples';
import { Radios } from '.';
import { diffComponentAgainstReferenceNunjucks } from '../../../../tests/utils/govuk-frontend-diff';
import worstCaseData from '../../../../utils/worstCaseData';

examples.examples.push({
  name: 'auto generated worst case',
  data: worstCaseData('radios'),
});

examples.examples.forEach(example => {
  example.data.onChange = () => {}; // Dummy onChange handler. Doesn't need to do anything - is just there to suppress React warnings
});

diffComponentAgainstReferenceNunjucks('radios', Radios, examples);

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
    const data = { ...examples.examples[0].data };
    const ref = React.createRef();

    data.items[0].ref = ref;

    const { container } = render(<Radios {...data} />);

    expect(ref.current).toEqual(container.querySelector('input'));
  });
});
