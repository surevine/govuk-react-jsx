import examples from '../../../../.cache/govuk-frontend-examples/table.json';
import worstCaseData from '../../../../utils/worstCaseData';

examples.examples.push({
  name: 'auto generated worst case',
  data: worstCaseData('table'),
});

export default examples;
