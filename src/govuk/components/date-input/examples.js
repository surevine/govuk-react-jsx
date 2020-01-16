import examples from '../../../../.cache/govuk-frontend-examples/date-input.json';
import worstCaseData from '../../../../utils/worstCaseData';

examples.examples.push({
  name: 'auto generated worst case',
  data: worstCaseData('date-input'),
});

export default examples;
