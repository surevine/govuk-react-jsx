import React from 'react';
import { render } from '@testing-library/react';
import examples from './examples';
import { Checkboxes } from '.';
import { diffComponentAgainstReferenceNunjucks } from '../../../../tests/utils/govuk-frontend-diff';
import worstCaseData from '../../../../utils/worstCaseData';

examples.examples.push({
  name: 'auto generated worst case',
  data: worstCaseData('checkboxes'),
});

examples.examples.forEach(example => {
  example.data.onChange = () => {}; // Dummy onChange handler. Doesn't need to do anything - is just there to suppress React warnings
});

diffComponentAgainstReferenceNunjucks('checkboxes', Checkboxes, examples);

describe('checkboxes', () => {
  it('correctly assigns a ref', () => {
    const data = { ...examples.examples[0].data };
    const ref = React.createRef();

    data.items[0].ref = ref;

    const { container } = render(<Checkboxes {...data} />);

    expect(ref.current).toEqual(container.querySelector('input'));
  });
});
