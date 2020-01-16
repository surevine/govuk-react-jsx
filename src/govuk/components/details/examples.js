import examples from '../../../../.cache/govuk-frontend-examples/details.json';
import worstCaseData from '../../../../utils/worstCaseData';

examples.examples.push({
  name: 'auto generated worst case',
  data: worstCaseData('details'),
});

export default examples;
