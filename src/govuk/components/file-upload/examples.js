import examples from '../../../../.cache/govuk-frontend-examples/file-upload.json';

// Insert additional examples here if desired

const modifiedExamples = { ...examples };

modifiedExamples.examples.forEach(function(item, index) {
  // React gets upset if you try and set a value on a file input so we exclude this example
  if (item.name === 'with value and attributes') {
    delete modifiedExamples.examples[index];
  }
});

export default modifiedExamples;
