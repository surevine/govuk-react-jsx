import examples from '../../../../.cache/govuk-frontend-examples/tabs.json';
import worstCaseData from '../../../../utils/worstCaseData';

examples.examples.push({
  name: 'auto generated worst case',
  data: worstCaseData('tabs'),
});

export default examples;
