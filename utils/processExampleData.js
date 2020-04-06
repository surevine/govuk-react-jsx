import deepIterator from 'deep-iterator';
import ReactHtmlParser from 'react-html-parser';

const propReplacements = {
  classes: 'className',
  describedBy: 'aria-describedby',
  containerClasses: 'containerClassName',
  navigationClasses: 'navigationClassName',
  autocomplete: 'autoComplete',
  for: 'htmlFor',
  // checked: 'defaultChecked',
  // value: 'defaultValue',
  captionClasses: 'captionClassName',
  colspan: 'colSpan',
  rowspan: 'rowSpan',
  summaryText: 'summaryChildren',
  summaryHtml: 'summaryChildren',
  descriptionText: 'descriptionChildren',
  descriptionHtml: 'descriptionChildren',
  titleText: 'titleChildren',
  titleHtml: 'titleChildren',
  inputmode: 'inputMode',
  serviceUrl: 'serviceUrlHref',
  homepageUrl: 'homepageUrlHref',
};

export default function processExampleData(data, componentName) {
  for (const { parent, value, key } of deepIterator(data)) {
    // Replace html and text props with children
    // Turn any html strings into jsx
    if ((key === 'html' || key === 'text') && value) {
      parent.children = ReactHtmlParser(value);
      delete parent[key];
    }

    // Various replacements of govuk specific params to react syntax. E.g. classes -> className
    if (Object.keys(propReplacements).includes(key)) {
      parent[propReplacements[key]] = value;
      delete parent[key];
    }

    // Spread attributes out into the object above them in a more React-like fashion
    if (key === 'attributes') {
      Object.assign(parent, value);
      delete parent.attributes;
    }
  }

  if (componentName === 'radios') {
    for (const { parent, value, key } of deepIterator(data)) {
      // Replace 'checked' value on radio items with a top level 'value' prop for compatibility with react form libraries
      if (key === 'items') {
        // Work out which one is checked
        const checked = value.find(item => item.checked);

        // Remove the checked value from each item
        parent.items = value.map(item => {
          const modifiedItem = { ...item };
          delete modifiedItem.checked;
          return modifiedItem;
        });

        if (checked) {
          parent.value = checked.value;
        }
      }
    }
  }

  if (componentName === 'select') {
    for (const { parent, value, key } of deepIterator(data)) {
      // Replace 'selected' value on select box items with a top level 'value' prop for compatibility with react
      if (key === 'items') {
        // Work out which one is checked
        const selected = value.find(item => item.selected);

        // Remove the checked value from each item
        parent.items = value.map(item => {
          const modifiedItem = { ...item };
          delete modifiedItem.selected;
          return modifiedItem;
        });

        if (selected) {
          parent.value = selected.value;
        }
      }
    }
  }

  return data;
}
