import examples from './examples'
import { SummaryList } from './'
import { diffComponentAgainstReferenceNunjucks } from '../../../../tests/utils/govuk-frontend-diff'

diffComponentAgainstReferenceNunjucks('summary-list', SummaryList, examples)
