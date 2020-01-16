import examples from './examples';
import { SummaryList } from '.';
import { diffComponentAgainstReferenceNunjucks } from '../../../../tests/utils/govuk-frontend-diff';
import worstCaseData from '../../../../utils/worstCaseData';

examples.examples.push({
  name: 'auto generated worst case',
  data: worstCaseData('summary-list'),
});

diffComponentAgainstReferenceNunjucks('summary-list', SummaryList, examples);
