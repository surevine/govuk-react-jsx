import examples from './examples'
import { ErrorMessage } from './'
import { diffComponentAgainstReferenceNunjucks } from '../../../../tests/utils/govuk-frontend-diff'

diffComponentAgainstReferenceNunjucks('error-message', ErrorMessage, examples)
