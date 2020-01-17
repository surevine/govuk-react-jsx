import examples from './examples';
import { Label } from '.';
import { diffComponentAgainstReferenceNunjucks } from '../../../../tests/utils/govuk-frontend-diff';
import worstCaseData from '../../../../utils/worstCaseData';

examples.examples.push({
  name: 'auto generated worst case',
  data: worstCaseData('label'),
});

diffComponentAgainstReferenceNunjucks('label', Label, examples);
