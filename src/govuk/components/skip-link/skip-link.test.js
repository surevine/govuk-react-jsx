import examples from './examples';
import { SkipLink } from '.';
import { diffComponentAgainstReferenceNunjucks } from '../../../../tests/utils/govuk-frontend-diff';
import worstCaseData from '../../../../utils/worstCaseData';

examples.examples.push({
  name: 'auto generated worst case',
  data: worstCaseData('skip-link'),
});

diffComponentAgainstReferenceNunjucks('skip-link', SkipLink, examples);
