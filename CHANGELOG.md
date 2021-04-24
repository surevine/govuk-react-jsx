# Changelog

## Unreleased

#### Fixes

#### Features

#### Breaking changes

---

## Releases

### v6.0.0

#### Fixes

- Fix badly destructured react list keys on some components (https://github.com/surevine/govuk-react-jsx/pull/114)
  - Fixes https://github.com/surevine/govuk-react-jsx/issues/113

#### Breaking changes

- Table data structure changed in order to accomodate react list keys. Each row in the `rows` array now has a `cells` key instead of simply being a nested array of rows / cells.

  See the updated demos on the storybook.

  This breaking change was necessary in order to accomodate react list keys on table rows.

### v5.1.0

#### Fixes

- Fix overeager instantiation of govuk JS (https://github.com/surevine/govuk-react-jsx/pull/110)
  - Fixes https://github.com/surevine/govuk-react-jsx/issues/99

#### Features

- Updated to govuk-frontend@3.11.0
  - See https://github.com/alphagov/govuk-frontend/releases/tag/v3.11.0 for full release notes
  - Cookie banner component added

### v5.0.0

- Further ErrorSummary focusing fixes
  The error summary no longer focuses itself at all when it is rendered - it is now fully up to the calling app to focus the error summary when appropriate.
  The ErrorSummary component accepts a ref which you can use to achieve this.
  A formik based demo of this is available in [https://github.com/surevine/govuk-react-jsx-examples/blob/master/src/forms/Formik.js](govuk-react-jsx-examples)

### v4.1.1

#### Fixes

- Remove overzealous focusing of ErrorSummary when list of errors changes.
  Component now accepts a ref which you can manually focus when appropriate (Such as when a form is submitted).
  A demo of this is available in [https://github.com/surevine/govuk-react-jsx-examples](govuk-react-jsx-examples)
- Update govuk-frontend to 3.10.2
  See https://github.com/alphagov/govuk-frontend/releases/tag/v3.10.1 and https://github.com/alphagov/govuk-frontend/releases/tag/v3.10.2 fox full release notes

### v4.1.0

#### Features

- Larger release than usual since the 3.9.x update caused a few issues with testing. Therefore have jumped straight to 3.10.0

  - Updated to govuk-frontend@3.10.0  
    See https://github.com/alphagov/govuk-frontend/releases/tag/v3.10.0 for full release notes
    - Customise input mode in the date component
    - New notification banner component added
  - Updated to govuk-frontend@3.9.1  
    See https://github.com/alphagov/govuk-frontend/releases/tag/v3.9.1 for full release notes
  - Updated to govuk-frontend@3.9.0  
    See https://github.com/alphagov/govuk-frontend/releases/tag/v3.9.0 for full release notes
    - Add input prefix and suffix.
    - Customise aria-label text in the header component - added `navigationLabel` and `menuButtonLabel` props
    - Ability to add navigation items without links
  - Switched test suite away from govuk-frontend-diff in favour of the fixtures now baked into govuk-frontend since 3.9.0
  - And as a result - have made many small fixes to pass the new test suite - nothing noteworthy, just small changes in edge case situations found in the new fixtures

### v4.0.3

#### Fixes

- Updated to govuk-frontend@3.8.1  
  See https://github.com/alphagov/govuk-frontend/releases/tag/v3.8.1 for full release notes

### v4.0.2

#### Fixes

- Add webpack magic comments to checkboxes and radios (accidentally missed from previous release)
- Tweak babel to allow dynamic imports through to the final package. Previously they were being resolved before being published.

### v4.0.1

#### Fixes

- Add webpack magic comments to optimize the dynamically imported govuk-frontend js

### v4.0.0

#### Features

- Updated to govuk-frontend@3.8.0  
  See https://github.com/alphagov/govuk-frontend/releases/tag/v3.8.0 for full release notes
- Switch hint from span to div so that it can render block-level elements as valid HTML. See https://github.com/alphagov/govuk-frontend/pull/1855
- Document spellcheck -> spellCheck mapping to cater for new spellcheck param in upstream nunjucks.  
  In reality no actual code changes for this one, just a documentation update. See https://github.com/alphagov/govuk-frontend/pull/1859
- Switched to using [govuk-frontend-diff](https://github.com/surevine/govuk-frontend-diff) for testing duties

#### Breaking changes

- Upshot of the switch to govuk-frontend-diff was that it became necessary to dynamically import the GOVUK components which interact with the DOM, in order to enable Server Side Rendering for the tests.  
  This is therefore marked up as a breaking change since it _may_ require changes to your Webpack config to support code splitting (Although create-react-app supports this out the box, in which case you don't need to do anything).  
  See https://reactjs.org/docs/code-splitting.html#import for more details.  
  This should pave the way for serverside rendering of the components although this isn't tested or formally supported yet (But may well work just fine...)

### v3.1.0

#### Features

- Updated to govuk-frontend@3.7.0  
  See https://github.com/alphagov/govuk-frontend/releases/tag/v3.7.0 for full release notes.  
  Only changes to the components are explicitly listed here.
- Nunjucks implementation now allows html in each navigation item in the header component. This is already satisifed by the replacement of `text` and `html` params with a single `children` prop catering for both eventualities. See https://github.com/alphagov/govuk-frontend/pull/1819
- You can now collapse the breadcrumb component on mobile using the new collapseOnMobile option. See https://github.com/alphagov/govuk-frontend/pull/1754

### v3.0.0

#### Breaking changes

- Moved the published package's dependencies to peerDependencies, to avoid issues with multiple copies of React etc being installed (Such as https://reactjs.org/warnings/invalid-hook-call-warning.html#duplicate-react).  
  **If you aren't already, you will need to install compatible versions of govuk-frontend, react-router, react, react-router-dom, react-helmet since these are no longer installed as dependencies of this package**

#### Fixes

- Updated the package's govuk-frontend dependency to 3.6.0 - it was incorrectly pinned to an older version

#### Features

- Updated dependency on react-helmet to 6

### v2.0.1

#### Fixes

- Remove erroneous space before comma in footer OGL statement

### v2.0.0

#### Breaking changes

- Header links - `homepageUrl` and `serviceUrl` have become `homepageUrlHref` / `homepageUrlTo` and `serviceUrlHref` / `serviceUrlTo`, with the `To` variants being passed to a react-router `<Link>` the `Href` variants being a plain html `<a>` tag

### v1.5.0

#### Fixes

- Use generic div element for tabspanel. See https://github.com/alphagov/govuk-frontend/pull/1746
- Fix fallback logo being detected by chromes image description feature. See https://github.com/alphagov/govuk-frontend/pull/1724

#### Features

- Updated to govuk-frontend@3.6.0. See https://github.com/alphagov/govuk-frontend/releases/tag/v3.6.0

### v1.4.2

#### Fixes

- Fix error summary not focusing after first form submission. Now correctly focuses every time submit is pressed

### v1.4.1

#### Fixes

- Fix bug when using controlled inputs whereby Radios would switch from uncontrolled to controlled and throw a console warning. Caused by the new features added in v1.4.0

### v1.4.0

#### Features

- `defaultValue` top level prop added to radios component to complement the `value` prop and facilitate compatibility with form libraries dealing with uncontrolled form inputs (Such as react-hook-form)

### v1.3.0

#### Features

- `React.forwardRef` now added to all singular form components allowing you to pass `useRef` refs into the component props. Components that return multiple form elements now accept a `ref` key for each item in the `items` array prop.

### v1.2.0

#### Fixes

- Update the date input component to use input type=text inputmode=numeric.
- Update checkboxes and radio buttons to include item hint classes on item hint.

#### Features

- Update to govuk-frontend@3.5.0. See https://github.com/alphagov/govuk-frontend/releases/tag/v3.5.0 for full notes.
- Allow custom classes to be added to character count hint message

#### Breaking changes

### v1.1.0

#### Fixes

More extensive test suite added, resulting in several minor fixes as follows

- Fix date input, file upload, input, select, textarea, checkboxes & radios not receiving correct aria-describedby attribute
- Fix date input, file upload, input, select, textarea, checkboxes & radios hints and error messages receiving incorrect ids
- Fix incorrect casing of date input labels
- Fix lack of colon after error message visually hidden text
- Fix missing attributes from error summary links
- Prevent assetPath prop making it through to header component in case someone passes it
- Prevent tag attributes making it through from phase banner (behaviour now consistent with govuk-frontend)
- Fix missing attributes from select options
- Omit role attribute from checkboxes/radios fieldset to be consistent with govuk-frontend

#### Features

- onChange prop assigned directly to `<DateInput>` will now get passed through to the individual inputs (No need to put change handlers individually in the items now). This mirrors the behaviour already seen on other compound fields such as Radios and Checkboxes

### v1.0.1

#### Fixes

- Fix for uncontrolled -> controlled radio inputs caused by bug in value assignment
- Slight tweak for Select component so that it accepts a top level value prop instead of individual selected booleans on each item to make it more React friendly

---

### v1.0.0

Initial release
