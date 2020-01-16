import examples from '../../../../.cache/govuk-frontend-examples/textarea.json';
import worstCaseData from '../../../../utils/worstCaseData';

examples.examples.push({
  name: 'auto generated worst case',
  data: worstCaseData('textarea'),
});

export default examples;
