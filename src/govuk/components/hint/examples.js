import examples from '../../../../.cache/govuk-frontend-examples/hint.json';
import worstCaseData from '../../../../utils/worstCaseData';

examples.examples.push({
  name: 'auto generated worst case',
  data: worstCaseData('hint'),
});

export default examples;
