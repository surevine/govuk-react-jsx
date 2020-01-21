# Changelog

## Unreleased

#### Fixes

#### Features

#### Breaking changes

---

## Releases

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
