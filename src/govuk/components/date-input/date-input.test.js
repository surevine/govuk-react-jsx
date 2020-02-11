import React from 'react';
import { render } from '@testing-library/react';
import examples from './examples';
import { DateInput } from '.';
import { diffComponentAgainstReferenceNunjucks } from '../../../../tests/utils/govuk-frontend-diff';
import worstCaseData from '../../../../utils/worstCaseData';

examples.examples.push({
  name: 'auto generated worst case',
  data: worstCaseData('date-input'),
});

examples.examples.forEach(example => {
  example.data.onChange = () => {}; // Dummy onChange handler. Doesn't need to do anything - is just there to suppress React warnings
});

diffComponentAgainstReferenceNunjucks('date-input', DateInput, examples);

describe('date input', () => {
  it('correctly assigns a ref', () => {
    const data = { ...examples.examples[0].data };
    const ref = React.createRef();

    data.items[0].ref = ref;

    const { container } = render(<DateInput {...data} />);

    expect(ref.current).toEqual(container.querySelector('input'));
  });
});
