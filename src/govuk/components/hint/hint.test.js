import examples from './examples'
import { Hint } from './'
import { diffComponentAgainstReferenceNunjucks } from '../../../../tests/utils/govuk-frontend-diff'

diffComponentAgainstReferenceNunjucks('hint', Hint, examples)
