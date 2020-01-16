import examples from '../../../../.cache/govuk-frontend-examples/file-upload.json';
import worstCaseData from '../../../../utils/worstCaseData';
import omit from '../../../utils/omitKey';

const modifiedExamples = { ...examples };

modifiedExamples.examples.forEach(function(item, index) {
  // React gets upset if you try and set a value on a file input so we exclude this example
  if (item.name === 'with value and attributes') {
    delete modifiedExamples.examples[index];
  }
});

examples.examples.push({
  name: 'auto generated worst case',
  data: omit(worstCaseData('file-upload'), 'value'),
});

export default modifiedExamples;
