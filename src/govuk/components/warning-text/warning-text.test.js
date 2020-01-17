import examples from './examples';
import { WarningText } from '.';
import { diffComponentAgainstReferenceNunjucks } from '../../../../tests/utils/govuk-frontend-diff';
import worstCaseData from '../../../../utils/worstCaseData';

examples.examples.push({
  name: 'auto generated worst case',
  data: worstCaseData('warning-text'),
});

diffComponentAgainstReferenceNunjucks('warning-text', WarningText, examples);
