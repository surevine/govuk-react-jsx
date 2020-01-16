import examples from '../../../../.cache/govuk-frontend-examples/summary-list.json';
import worstCaseData from '../../../../utils/worstCaseData';

examples.examples.push({
  name: 'auto generated worst case',
  data: worstCaseData('summary-list'),
});

export default examples;
