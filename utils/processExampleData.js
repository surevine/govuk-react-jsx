import deepIterator from 'deep-iterator'
import ReactHtmlParser from 'react-html-parser'

const propReplacements = {
  classes: 'className',
  describedBy: 'aria-describedby',
  containerClasses: 'containerClassname',
  navigationClasses: 'navigationClassName',
  autocomplete: 'autoComplete',
  for: 'htmlFor',
  checked: 'defaultChecked',
  value: 'defaultValue',
  captionClasses: 'captionClassName',
  colspan: 'colSpan',
  rowspan: 'rowSpan'
}

export default function processExampleData(data) {
  for (let { parent, value, key } of deepIterator(data)) {
    // Turn any html strings into jsx
    if (key === 'html' && value) {
      parent[key] = ReactHtmlParser(value)
    }

    // Various replacements of govuk specific params to react syntax. E.g. classes -> className
    if (Object.keys(propReplacements).includes(key)) {
      parent[propReplacements[key]] = value
      delete parent[key]
    }

    // Spread attributes out into the object above them in a more React-like fashion
    if (key === 'attributes') {
      Object.assign(parent, value)
      delete parent['attributes']
    }
  }
  return data
}
