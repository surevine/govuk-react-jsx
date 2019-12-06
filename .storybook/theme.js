import { create } from '@storybook/theming/create'

export default create({
  base: 'light',

  colorPrimary: 'hotpink',
  colorSecondary: '#1d70b8',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: '#0b0c0c',
  appBorderRadius: 0,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#0b0c0c',
  textInverseColor: 'rgba(0,0,0,0.9)',

  // Toolbar default and active colors
  barTextColor: '#1d70b8',
  barSelectedColor: '#1d70b8',
  barBg: '#f8f8f8',

  // Form colors
  inputBg: 'white',
  inputBorder: '#0b0c0c',
  inputTextColor: '#0b0c0c',
  inputBorderRadius: 0,

  brandTitle: 'govuk-react-jsx',
  brandUrl: 'https://github.com/andymantell/govuk-react-jsx'
  // brandImage: 'https://placehold.it/350x150'
})
