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

diffComponentAgainstReferenceNunjucks('radios', Radios, examples);

it('Radios top level value prop maps correctly to checked items', () => {
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
    />
  );

  expect(getByDisplayValue('yes').checked).toEqual(false);
  expect(getByDisplayValue('no').checked).toEqual(true);
});
