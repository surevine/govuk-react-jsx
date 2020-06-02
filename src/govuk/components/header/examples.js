import examples from '../../../../.cache/govuk-frontend-examples/header.json';

// Examples specify serviceName but not serviceUrl, causing rendering differences
// Temporarily tweak the examples until fix is in place upstream
// See https://github.com/alphagov/govuk-frontend/pull/1825
examples.examples.forEach((example) => {
  if ('serviceName' in example.data) {
    example.data.serviceUrl = '/foo';
  }
});

export default examples;
