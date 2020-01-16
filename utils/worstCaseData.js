import { kebabCase, set } from 'lodash';
import examples from '../.cache/govuk-frontend-examples/all.json';

const bools = {};
function alternateBooleans(type) {
  if (!bools[type]) {
    bools[type] = false;
  }

  bools[type] = !bools[type];
  return bools[type];
}

function dataFromParams(params, componentName) {
  return params.reduce((accumulator, param) => {
    let data;

    if (param.isComponent) {
      data = dataFromParams(examples[kebabCase(param.name)].params);
    } else {
      switch (param.type) {
        case 'array':
          data = [];

          for (let i = 1; i < 10; i += 1) {
            data.push(dataFromParams(param.params));
          }

          if (componentName === 'table' && param.name === 'rows') {
            const rowData = Array(10);
            rowData.fill(data, 0, 10);
            data = rowData;
          }

          break;

        case 'object':
          if (param.params) {
            data = dataFromParams(param.params);
          } else {
            data = { foo: 'bar', wibble: 'bob' };
          }
          break;

        case 'boolean':
          if (['disabled', 'checked'].includes(param.name)) {
            data = alternateBooleans(param.name);
          } else {
            data = true;
          }
          break;

        case 'string':
        case 'html':
          if (param.name.indexOf('html') !== -1) {
            data = `<b>${param.name}</b>-<i>${
              param.type
            }</i>-<small>${Math.round(Math.random() * 10000000000)}</small>`;
          } else {
            data = `${param.name}-${param.type}-${Math.round(
              Math.random() * 10000000000
            )}`;
          }

          if (componentName === 'radios' && param.name === 'divider') {
            data = alternateBooleans(param.name) ? data : null;
          }

          if (
            componentName === 'character-count' &&
            ['maxlength', 'maxwords', 'threshold'].includes(param.name)
          ) {
            data = Math.round(Math.random() * 100);
          }

          if (componentName === 'button' && param.name === 'element') {
            data = 'button';
          }

          break;

        case 'integer':
          data = 1;
          break;

        case 'nunjucks-block':
          // Nothing to do - this is something to do with nunjucks
          break;

        default:
          console.error(param);
          throw Error(`Unhandled param ${param.name}: ${param.type}`);
      }
    }

    // Some param names are paths, like conditional.html so we use lodash.set to handle this deep path setting
    set(accumulator, param.name, data);
    return accumulator;
  }, {});
}

export default function worstCaseData(componentName) {
  return dataFromParams(examples[componentName].params, componentName);
}
