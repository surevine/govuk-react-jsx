import examples from './examples';
import { Checkboxes } from '.';
import { diffComponentAgainstReferenceNunjucks } from '../../../../tests/utils/govuk-frontend-diff';

diffComponentAgainstReferenceNunjucks('checkboxes', Checkboxes, examples);
