import examples from './examples';
import { Fieldset } from '.';
import { diffComponentAgainstReferenceNunjucks } from '../../../../tests/utils/govuk-frontend-diff';

diffComponentAgainstReferenceNunjucks('fieldset', Fieldset, examples);
