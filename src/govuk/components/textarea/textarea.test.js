import React from 'react';
import { render } from '@testing-library/react';
import examples from './examples';
import { Textarea } from '.';
import { diffComponentAgainstReferenceNunjucks } from '../../../../tests/utils/govuk-frontend-diff';
import worstCaseData from '../../../../utils/worstCaseData';

examples.examples.push({
  name: 'auto generated worst case',
  data: worstCaseData('textarea'),
});

examples.examples.forEach((example) => {
  example.data.onChange = () => {}; // Dummy onChange handler. Doesn't need to do anything - is just there to suppress React warnings
});

diffComponentAgainstReferenceNunjucks('textarea', Textarea, examples);

describe('textarea', () => {
  it('correctly assigns a ref', () => {
    const ref = React.createRef();
    const { container } = render(
      <Textarea {...examples.examples[0].data} ref={ref} />
    );

    expect(ref.current).toEqual(container.querySelector('textarea'));
  });
});
