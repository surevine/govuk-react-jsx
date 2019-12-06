import examples from './examples'
import { Footer } from '.'
import { diffComponentAgainstReferenceNunjucks } from '../../../../tests/utils/govuk-frontend-diff'

diffComponentAgainstReferenceNunjucks('footer', Footer, examples)
