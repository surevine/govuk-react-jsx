import examples from './examples'
import { InsetText } from './'
import { diffComponentAgainstReferenceNunjucks } from '../../../../tests/utils/govuk-frontend-diff'

diffComponentAgainstReferenceNunjucks('inset-text', InsetText, examples)
