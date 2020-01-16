import examples from '../../../../.cache/govuk-frontend-examples/error-message.json';

import worstCaseData from '../../../../utils/worstCaseData';

examples.examples.push({
  name: 'auto generated worst case',
  data: worstCaseData('error-message'),
});

export default examples;
