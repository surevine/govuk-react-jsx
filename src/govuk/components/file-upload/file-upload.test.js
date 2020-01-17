import examples from './examples';
import { FileUpload } from '.';
import { diffComponentAgainstReferenceNunjucks } from '../../../../tests/utils/govuk-frontend-diff';
import worstCaseData from '../../../../utils/worstCaseData';
import omit from '../../../utils/omitKey';

examples.examples.push({
  name: 'auto generated worst case',
  data: omit(worstCaseData('file-upload'), 'value'),
});

diffComponentAgainstReferenceNunjucks('file-upload', FileUpload, examples);
