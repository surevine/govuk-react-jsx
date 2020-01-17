import examples from './examples';
import { Tag } from '.';
import { diffComponentAgainstReferenceNunjucks } from '../../../../tests/utils/govuk-frontend-diff';
import worstCaseData from '../../../../utils/worstCaseData';

examples.examples.push({
  name: 'auto generated worst case',
  data: worstCaseData('tag'),
});

diffComponentAgainstReferenceNunjucks('tag', Tag, examples);
