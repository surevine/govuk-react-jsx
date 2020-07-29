import React from 'react';
import { render } from '@testing-library/react';
import examples from './examples';
import { FileUpload } from '.';

describe('file upload', () => {
  it('correctly assigns a ref', () => {
    const ref = React.createRef();
    const { container } = render(
      <FileUpload {...examples.examples[0].data} ref={ref} />
    );

    expect(ref.current).toEqual(container.querySelector('input'));
  });
});
