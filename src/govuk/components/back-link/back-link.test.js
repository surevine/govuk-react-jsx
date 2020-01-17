import examples from './examples';
import { BackLink } from '.';
import { diffComponentAgainstReferenceNunjucks } from '../../../../tests/utils/govuk-frontend-diff';
import worstCaseData from '../../../../utils/worstCaseData';

examples.examples.push({
  name: 'auto generated worst case',
  data: worstCaseData('back-link'),
});

diffComponentAgainstReferenceNunjucks('back-link', BackLink, examples);
