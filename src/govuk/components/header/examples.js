import examples from '../../../../.cache/govuk-frontend-examples/header.json';
import worstCaseData from '../../../../utils/worstCaseData';

examples.examples.push({
  name: 'auto generated worst case',
  data: worstCaseData('header'),
});

export default examples;
