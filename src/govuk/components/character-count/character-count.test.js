import examples from './examples'
import { CharacterCount } from './'
import { diffComponentAgainstReferenceNunjucks } from '../../../../tests/utils/govuk-frontend-diff'

diffComponentAgainstReferenceNunjucks(
  'character-count',
  CharacterCount,
  examples
)
