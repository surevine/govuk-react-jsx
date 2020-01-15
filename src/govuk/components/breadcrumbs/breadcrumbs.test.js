import examples from './examples';
import { Breadcrumbs } from '.';
import { diffComponentAgainstReferenceNunjucks } from '../../../../tests/utils/govuk-frontend-diff';

diffComponentAgainstReferenceNunjucks('breadcrumbs', Breadcrumbs, examples);
