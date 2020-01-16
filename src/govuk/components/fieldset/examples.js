import examples from '../../../../.cache/govuk-frontend-examples/fieldset.json';
import worstCaseData from '../../../../utils/worstCaseData';

examples.examples.push({
  name: 'auto generated worst case',
  data: worstCaseData('fieldset'),
});

export default examples;
