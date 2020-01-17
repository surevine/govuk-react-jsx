import examples from './examples';
import { ErrorMessage } from '.';
import { diffComponentAgainstReferenceNunjucks } from '../../../../tests/utils/govuk-frontend-diff';
import worstCaseData from '../../../../utils/worstCaseData';

examples.examples.push({
  name: 'auto generated worst case',
  data: worstCaseData('error-message'),
});

diffComponentAgainstReferenceNunjucks('error-message', ErrorMessage, examples);
