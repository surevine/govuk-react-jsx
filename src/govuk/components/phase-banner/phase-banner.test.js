import examples from './examples';
import { PhaseBanner } from '.';
import { diffComponentAgainstReferenceNunjucks } from '../../../../tests/utils/govuk-frontend-diff';
import worstCaseData from '../../../../utils/worstCaseData';

examples.examples.push({
  name: 'auto generated worst case',
  data: worstCaseData('phase-banner'),
});

diffComponentAgainstReferenceNunjucks('phase-banner', PhaseBanner, examples);
