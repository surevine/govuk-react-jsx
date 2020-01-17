import examples from './examples';
import { InsetText } from '.';
import { diffComponentAgainstReferenceNunjucks } from '../../../../tests/utils/govuk-frontend-diff';
import worstCaseData from '../../../../utils/worstCaseData';

examples.examples.push({
  name: 'auto generated worst case',
  data: worstCaseData('inset-text'),
});

diffComponentAgainstReferenceNunjucks('inset-text', InsetText, examples);
