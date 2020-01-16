import examples from './examples';
import { ErrorSummary } from '.';
import { diffComponentAgainstReferenceNunjucks } from '../../../../tests/utils/govuk-frontend-diff';

diffComponentAgainstReferenceNunjucks('error-summary', ErrorSummary, examples);
