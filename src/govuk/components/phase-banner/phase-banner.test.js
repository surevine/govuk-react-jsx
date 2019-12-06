import examples from './examples'
import { PhaseBanner } from './'
import { diffComponentAgainstReferenceNunjucks } from '../../../../tests/utils/govuk-frontend-diff'

diffComponentAgainstReferenceNunjucks('phase-banner', PhaseBanner, examples)
