import examples from '../../../../.cache/govuk-frontend-examples/radios.json';
import worstCaseData from '../../../../utils/worstCaseData';

// See https://github.com/alphagov/govuk-frontend/pull/1595
examples.examples.push({
  name: 'empty conditionals',
  data: {
    idPrefix: 'foo',
    name: 'foo',
    items: [
      {
        value: 'foo',
        text: 'Foo',
        conditional: {
          html: false,
        },
      },
    ],
  },
});

examples.examples.push({
  name: 'auto generated worst case',
  data: worstCaseData('radios'),
});

export default examples;
