# Changelog

## Unreleased

#### Fixes

#### Features

#### Breaking changes

---

## Releases

### v3.0.0

#### Breaking changes

- Moved the published package's dependencies to peerDependencies, to avoid strange issues with multiple copies of React etc being installed

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
