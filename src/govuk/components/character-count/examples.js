import examples from '../../../../.cache/govuk-frontend-examples/character-count.json';
import worstCaseData from '../../../../utils/worstCaseData';

// See https://github.com/alphagov/govuk-frontend/pull/1553
examples.examples.push({
  name: 'with classes on the form group',
  data: {
    name: 'more-detail',
    id: 'more-detail',
    maxlength: 10,
    formGroup: {
      classes: 'class-on-the-form-group',
    },
    label: {
      text: 'Can you provide more detail?',
    },
  },
});

examples.examples.push({
  name: 'auto generated worst case',
  data: worstCaseData('character-count'),
});

export default examples;
