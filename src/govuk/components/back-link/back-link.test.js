import examples from './examples'
import BackLink from './'
import { diffComponentAgainstReferenceNunjucks } from '../../../../tests/utils/govuk-frontend-diff'

diffComponentAgainstReferenceNunjucks('back-link', BackLink, examples)
