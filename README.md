# GOV.UK React components (govuk-react-jsx)

[![version](https://img.shields.io/npm/v/govuk-react-jsx.svg?style=flat-square)](https://www.npmjs.com/package/govuk-react-jsx)
![govuk-frontend 3.5.0](https://img.shields.io/badge/govuk--frontend%20version-3.5.0-005EA5?logo=gov.uk&style=flat-square)
[![Build Status](https://img.shields.io/travis/surevine/govuk-react-jsx.svg?style=flat-square)](https://travis-ci.org/surevine/govuk-react-jsx)
[![MIT License](https://img.shields.io/npm/l/govuk-react-jsx.svg?style=flat-square)](https://github.com/surevine/govuk-react-jsx/blob/master/LICENSE)

View demo at https://surevine.github.io/govuk-react-jsx/

View example app at [https://codesandbox.io/s/govuk-react-jsx-cra-jeiku](https://codesandbox.io/s/govuk-react-jsx-cra-jeiku)

## Motivation

This repository contains govuk-frontend compatible React components. The aim of this package is to steer closely to govuk-frontend by consuming the CSS directly from the govuk-frontend npm package. And to strike a balance between mirroring the GOV.UK Nunjucks params vs ideomatic React props.

This has the following benefits

- Generated markup is identical to the output from the govuk-frontend macros. This allows us to benefit from the hard work that GDS has put into forming good markup patterns, including use of aria attributes.
- Keeping up to date with upstream changes in govuk-frontend is as simple as updating the package.json version and mirroring any markup changes made. The test suite helps with this by comparing our output against the reference Nunjucks output - any differences constitute a test failure.
- Anyone that knows the GOV.UK Nunjucks macros will quickly feel familiar with the structure of these components

## Comparison with govuk-react

[govuk-react](https://github.com/govuk-react/govuk-react) is the other main option in this space. Naturally the first thing people ask is why one might use this repository instead of govuk-react. Here's my take on the matter:

<!-- prettier-ignore -->
| govuk-react | govuk-react-jsx (This repository) |
| ----------- | --------------------------------- |
| An _implementation of_ the govuk design system.<br>CSS, JS and Markup patterns have all been rewritten from scratch.<br>Aria attributes missing.                                                              | Directly consumes the govuk-frontend CSS/JS and accurately mirrors their markup patterns, including Aria attributes                                                                                                                                                                                                                                                                                                                                                                            |
| Upstream CSS/JS changes in govuk-frontend need to be manually transferred across and/or rebuilt                                                                                                               | Upstream CSS/JS changes are pulled in automatically. Only markup changes need to manually transferred (But are validated as correct by the test suite)                                                                                                                                                                                                                                                                                                                                         |
| Relatively complex code                                                                                                                                                                                       | Simpler code - just plain JSX ports of the Nunjucks                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Uses StyledComponents<br>Great if you like them and use them. But if you prefer a different library then you would end up needing both in your toolchain.<br>Increased maintenance burden on govuk-react team | Uses plain Sass compilation of the govuk-frontend code.<br>You are free to use a CSSinJS library of your choice for your own styles if you wish                                                                                                                                                                                                                                                                                                                                                |
| Cleaner component props since it has been designed from the ground up for React                                                                                                                               | Props mostly mirror the govuk-frontend Nunjucks params with some exceptions as below. This has been done in order to steer as closely to govuk-frontend as possible, and to facilitate the test suite checking the output against the original.<br><br>This is possibly the main argument against this repository and _for_ govuk-react. It's a tradeoff. One that is worth making _in my opinion_ but make your own call on that.                                                             |
| More comprehensive set of components.<br>Includes components for headings, paragraphs, spacing etc                                                                                                            | Only includes components that are direct equivalents of the Nunjucks templates in govuk-frontend.<br>(Although a future release is planned that will include grid, headings and paragraphs etc.)<br>Spacing classes will likely never be a component in this repository - some things like that I feel are already sufficiently well served by just using the CSS classes directly. This repository does not attempt to abstract you away from the fact that you are using govuk-frontend CSS. |
| Allows code splitting of the styles, since they are defined in each component | No code splitting - all GOV.UK CSS is loaded. Although - it is relatively easy to omit the Scss files that you don't need so this is only a small downside |
| No complications from integrating with other libraries | As per the React docs on [Integrating with other libraries](https://reactjs.org/docs/integrating-with-other-libraries.html) there is a very small chance that the integration of the GOV.UK JS might result in bugs if React tries to update a component that the GOV.UK JS has also updated. This is fairly unlikely but is something to be mindful of. |

## Assumptions

These components assume you:

- Have compiled the govuk-frontend scss and have included it in your page (create-react-app is able to compile the gov.uk Sass files)
- Are using react-router
- **Have read the exceptions below**

## Exceptions

Exceptions to the conformance with govuk-frontend nunjucks params are as follows:

- Links - Anywhere that accepts an `href` / `text` combo of params to create a hyperlink, will also accept a `to` prop instead of `href`, which will be used in a react-router `<Link>` element.
- Anywhere that accepts an `html` or `text` param in Nunjucks will instead accept a `children` prop which should be passed either a string, or JSX. Params such as `summaryText` or `summaryHtml` become `summaryChildren`
- `classes` becomes `className`
- `describedBy` becomes `aria-describedby`
- List keys - Anywhere that you specify an array of items such as a list of links, you may optionally specify a `reactListKey` for each item. This will be used instead of the index when doing `.map` over the items. React uses these keys internally to work out whether to re-render items. This is crucial for dynamic components where you might re-sort the list items for example. For static data it is less important and the key can be omitted. (See https://reactjs.org/docs/lists-and-keys.html#keys for more)
  (_The only exception to this rule is the tab component, where the tabs are already sufficiently keyed by id_)
- The `<Select>` component and `<Radios>` components take a top level `value` prop, instead of setting `checked` or `selected` on the individual items. This is more in line with React and React-based form libraries

See [utils/processExampleData.js](utils/processExampleData.js) for the complete list of transformations.

## Installation & Usage

### Installation

`npm i --save govuk-react-jsx`

NB: `govuk-react-jsx` has a number package dependencies, including:

- govuk-frontend
- react-router
- react
- react-helmet

A full list can be found in the `dependencies` section of [`/scripts/package.json`](https://github.com/surevine/govuk-react-jsx/blob/master/scripts/package.json)

An example of setting up create-react-app to use govuk-react-jsx can be viewed in [this commit over on govuk-react-jsx-examples](https://github.com/surevine/govuk-react-jsx-examples/commit/2bcdfb4ccfd6597eb9b5a410ae76322b64b9dcfa). 

### Using Styles

`govuk-react-jsx` uses the same styles as `govuk-frontend`, the only difference being styles need to be applied using `className` rather than `class` as it's React.

e.g. to use `govuk-frontend` [typography](https://design-system.service.gov.uk/styles/typography/) styles:

```html
<p className="govuk-body">
  Use this design system to make your service consistent with GOV.UK.
</p>
```

An example of using govuk-frontend styles with `govuk-react-jsx` can be viewed at [https://codesandbox.io/s/govuk-react-jsx-hello-world-rurip](https://codesandbox.io/s/govuk-react-jsx-hello-world-rurip).

### Using Components

All components are documented in [Storybook](https://surevine.github.io/govuk-react-jsx/) with example usage code.

e.g. to render a panel component

```html
import { Panel } from 'govuk-react-jsx';

<Panel titleChildren="Application complete">
  Your reference number: HDJ2123F
</Panel>
```

### Using with Formik

An example of using `govuk-react-jsx` to create forms using Formik, complete with error validation can be viewed at [https://codesandbox.io/s/govuk-react-jsx-cra-formik-s833k](https://codesandbox.io/s/govuk-react-jsx-cra-formik-s833k).

### Refs for form components

In the case of form components `React.forwardRef` is used to forward any ref passed to a component onto the underlying DOM element. For example:

```
const ref = useRef();
<Input
  ref={ref}
  id="input-example"
  label={{
    children: [
      'National Insurance number'
    ]
  }}
  name="test-name"
  type="text"
/>
```

In this code, `ref` will contain a reference to the actual DOM input element. You could use this to then call `.focus()` on the element.

For components such as DateInput, Radios, Checkboxes and anywhere that uses an `items` prop to represent many form elements to be returned by the component, each object in the items array can accept a `ref` key which will then return a reference to the rendered form element for that item.

Rather than adding them everywhere I have currently restricted it to form components where I can imagine a use case. Please open an issue if you need refs forwarded onto other types of elements - I may have missed a use case.

## Versioning

This repository is versioned separately and follows standard semver procedures.

## Tests

The test suite renders the examples from the govuk-frontend repository through the Nunjucks macros as well as the JSX components and compares the output. Any differences here constitute a failure.

Tests are currently running in TravisCI. See https://travis-ci.org/surevine/govuk-react-jsx

## Credits

Thanks to [Mick Jones](https://github.com/mick-jones) for help building some of the original components.
