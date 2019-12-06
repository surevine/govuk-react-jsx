import examples from './examples'
import { Textarea } from '.'
import { diffComponentAgainstReferenceNunjucks } from '../../../../tests/utils/govuk-frontend-diff'

diffComponentAgainstReferenceNunjucks('textarea', Textarea, examples)
