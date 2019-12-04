import { configure } from '@storybook/react'
import './styles.scss'

// automatically import all files called stories.js
configure(require.context('../src/components', true, /stories\.js$/), module)
