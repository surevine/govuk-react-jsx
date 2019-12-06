import examples from './examples'
import { WarningText } from './'
import { diffComponentAgainstReferenceNunjucks } from '../../../../tests/utils/govuk-frontend-diff'

diffComponentAgainstReferenceNunjucks('warning-text', WarningText, examples)
