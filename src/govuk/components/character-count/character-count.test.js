import examples from './examples';
import { CharacterCount } from '.';
import { diffComponentAgainstReferenceNunjucks } from '../../../../tests/utils/govuk-frontend-diff';
import worstCaseData from '../../../../utils/worstCaseData';

examples.examples.push({
  name: 'auto generated worst case',
  data: worstCaseData('character-count'),
});

diffComponentAgainstReferenceNunjucks(
  'character-count',
  CharacterCount,
  examples
);
