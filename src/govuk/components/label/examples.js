import examples from '../../../../.cache/govuk-frontend-examples/label.json';
import worstCaseData from '../../../../utils/worstCaseData';

examples.examples.push({
  name: 'auto generated worst case',
  data: worstCaseData('label'),
});

export default examples;
