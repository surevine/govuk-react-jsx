import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { Header as BaseHeader } from '.';
import examples from './examples';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('header', module);

const Header = function(props) {
  return (
    <BrowserRouter>
      <BaseHeader {...props} />
    </BrowserRouter>
  );
};

for (const example of Object.values(processExampleData(examples.examples))) {
  stories.add(example.name, () => <Header {...example.data} />);
}
