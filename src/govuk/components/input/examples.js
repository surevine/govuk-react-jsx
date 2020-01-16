import examples from '../../../../.cache/govuk-frontend-examples/input.json';
import worstCaseData from '../../../../utils/worstCaseData';

examples.examples.push({
  name: 'auto generated worst case',
  data: worstCaseData('input'),
});

export default examples;
