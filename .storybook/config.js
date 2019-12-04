import { configure } from '@storybook/react'

// automatically import all files called stories.js
configure(require.context('../src/components', true, /stories\.js$/), module)
