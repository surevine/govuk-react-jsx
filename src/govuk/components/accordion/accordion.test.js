import examples from './examples'
import { Accordion } from './'
import { diffComponentAgainstReferenceNunjucks } from '../../../../tests/utils/govuk-frontend-diff'

diffComponentAgainstReferenceNunjucks('accordion', Accordion, examples)
