import React from 'react';
import { render } from '@testing-library/react';
import examples from './examples';
import { Button } from '.';
import { diffComponentAgainstReferenceNunjucks } from '../../../../tests/utils/govuk-frontend-diff';
import worstCaseData from '../../../../utils/worstCaseData';

examples.examples.push({
  name: 'auto generated worst case',
  data: worstCaseData('button'),
});

diffComponentAgainstReferenceNunjucks('button', Button, examples);

describe('button', () => {
  it('correctly assigns a ref', () => {
    const ref = React.createRef();
    const { container } = render(
      <Button {...examples.examples[0].data} ref={ref} />
    );

    expect(ref.current).toEqual(container.querySelector('button'));
  });
});
