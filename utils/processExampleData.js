import deepIterator from 'deep-iterator';
import ReactHtmlParser from 'react-html-parser';

const propReplacements = {
  classes: 'className',
  describedBy: 'aria-describedby',
  containerClasses: 'containerClassName',
  navigationClasses: 'navigationClassName',
  autocomplete: 'autoComplete',
  for: 'htmlFor',
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
  spellcheck: 'spellCheck',
  tabindex: 'tabIndex',
  ariaLabel: 'aria-label',
  headingText: 'headingChildren',
};

export default function processExampleData(data, componentName) {
  for (const { parent, value, key } of deepIterator(data)) {
    // Replace html and text props with children
    // Turn any html strings into jsx
    if (key && key.toString().toLowerCase().slice(-4) === 'html' && value) {
      let replacementKey;

      if (key === 'html') {
        replacementKey = 'children';
      } else {
        // Replacements like headingHtml becomes headingChildren
        replacementKey = key.replace('Html', 'Children');
      }

      parent[replacementKey] = ReactHtmlParser(value);
      delete parent[key];
    }

    if (key === 'text' && value) {
      parent.children = value;
      delete parent[key];
    }

    // Various replacements of govuk specific params to react syntax. E.g. classes -> className
    if (Object.keys(propReplacements).includes(key)) {
      parent[propReplacements[key]] = value;
      delete parent[key];
    }

    // Spread attributes out into the object above them in a more React-like fashion
    if (key === 'attributes') {
      Object.keys(value).forEach((attributeName) => {
        if (Object.keys(propReplacements).includes(attributeName)) {
          parent[propReplacements[attributeName]] = value[
            attributeName
          ].toString();
        } else {
          parent[attributeName] = value[attributeName].toString();
        }
      });

      delete parent.attributes;
    }
  }

  if (componentName === 'radios') {
    for (const { parent, value, key } of deepIterator(data)) {
      // Replace 'checked' value on radio items with a top level 'value' prop for compatibility with react form libraries
      if (key === 'items') {
        // Work out which one is checked
        const checked = value
          .filter((item) => item)
          .find((item) => item.checked);

        // Remove the checked value from each item
        parent.items = value.map((item) => {
          if (item && Object.keys(item).length > 0) {
            const modifiedItem = { ...item };
            delete modifiedItem.checked;
            return modifiedItem;
          }

          return item;
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
        const selected = value.find((item) => (item ? item.selected : null));

        // Remove the selected value from each item
        parent.items = value.map((item) => {
          if (item && Object.keys(item).length > 0) {
            const modifiedItem = { ...item };
            delete modifiedItem.selected;
            return modifiedItem;
          }

          return item;
        });

        if (selected) {
          parent.value = selected.value;
        }
      }
    }
  }

  if (componentName === 'cookie-banner') {
    for (const { parent, value, key } of deepIterator(data)) {
      if (key === 'messages') {
        if (value.length > 0) {
          parent[key] = value.map((item, index) => {
            return {
              ...item,
              key: index,
            };
          });
        }
      }
    }

    for (const { parent, value, key } of deepIterator(data)) {
      if (key === 'actions') {
        if (value.length > 0) {
          parent[key] = value.map((item, index) => {
            return {
              ...item,
              key: index,
            };
          });
        }
      }
    }
  }

  return data;
}
