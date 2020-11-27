import React from 'react';
import { Boolean } from '../../../utils/Boolean';

function Radios(props) {
  const { value, defaultValue, items, ...restProps } = props;

  // Map React-like `value` top level prop to the child items' checked status
  const processedItems = items
    ? items.map((item) => {
        if (item) {
          return {
            ...item,
            ...(value != null && { checked: item.value === value }),
            ...(defaultValue != null && {
              defaultChecked: item.value === defaultValue,
            }),
          };
        }
        return item;
      })
    : null;

  return <Boolean items={processedItems} {...restProps} controlType="radios" />;
}

export { Radios };
