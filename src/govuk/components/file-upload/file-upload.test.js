import examples from './examples'
import { FileUpload } from './'
import { diffComponentAgainstReferenceNunjucks } from '../../../../tests/utils/govuk-frontend-diff'

diffComponentAgainstReferenceNunjucks('file-upload', FileUpload, examples)
