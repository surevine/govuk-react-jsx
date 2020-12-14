import React from 'react';
import { render } from '@testing-library/react';
import fixtures from 'govuk-frontend/govuk/components/file-upload/fixtures.json';
import { FileUpload } from '.';

describe('file upload', () => {
  it('correctly assigns a ref', () => {
    const ref = React.createRef();
    const { container } = render(
      <FileUpload {...fixtures.fixtures[0].options} ref={ref} />
    );

    expect(ref.current).toEqual(container.querySelector('input'));
  });
});
