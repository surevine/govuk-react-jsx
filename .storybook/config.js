import { configure } from '@storybook/react'
import styles from 'govuk-frontend/govuk/all.scss'

// automatically import all files called stories.js
configure(require.context('../src/components', true, /stories\.js$/), module)
