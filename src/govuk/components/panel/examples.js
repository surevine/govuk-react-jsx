import examples from '../../../../.cache/govuk-frontend-examples/panel.json';
import worstCaseData from '../../../../utils/worstCaseData';

examples.examples.push({
  name: 'auto generated worst case',
  data: worstCaseData('panel'),
});

export default examples;
