import examples from './examples'
import { Tag } from '.'
import { diffComponentAgainstReferenceNunjucks } from '../../../../tests/utils/govuk-frontend-diff'

diffComponentAgainstReferenceNunjucks('tag', Tag, examples)
