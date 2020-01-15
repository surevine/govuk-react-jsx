import React, { useEffect } from 'react';
import { Boolean } from '../../../utils/Boolean';

function Checkboxes(props) {
  return <Boolean {...props} controlType="checkboxes" />;
}

export { Checkboxes };
