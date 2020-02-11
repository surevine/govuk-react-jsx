import React from 'react';
import { render } from '@testing-library/react';
import examples from './examples';
import { FileUpload } from '.';
import { diffComponentAgainstReferenceNunjucks } from '../../../../tests/utils/govuk-frontend-diff';
import worstCaseData from '../../../../utils/worstCaseData';
import omit from '../../../utils/omitKey';

examples.examples.push({
  name: 'auto generated worst case',
  data: omit(worstCaseData('file-upload'), 'value'),
});

diffComponentAgainstReferenceNunjucks('file-upload', FileUpload, examples);

describe('file upload', () => {
  it('correctly assigns a ref', () => {
    const ref = React.createRef();
    const { container } = render(
      <FileUpload {...examples.examples[0].data} ref={ref} />
    );

    expect(ref.current).toEqual(container.querySelector('input'));
  });
});
