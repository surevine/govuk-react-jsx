import examples from './examples';
import { Input } from '.';
import { diffComponentAgainstReferenceNunjucks } from '../../../../tests/utils/govuk-frontend-diff';

diffComponentAgainstReferenceNunjucks('input', Input, examples);
