import examples from './examples'
import { SkipLink } from '.'
import { diffComponentAgainstReferenceNunjucks } from '../../../../tests/utils/govuk-frontend-diff'

diffComponentAgainstReferenceNunjucks('skip-link', SkipLink, examples)
