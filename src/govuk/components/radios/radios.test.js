import examples from './examples'
import { Radios } from './'
import { diffComponentAgainstReferenceNunjucks } from '../../../../tests/utils/govuk-frontend-diff'

diffComponentAgainstReferenceNunjucks('radios', Radios, examples)
