import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { action } from '@storybook/addon-actions';
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

for (const [index, example] of Object.entries(
  processExampleData(examples.examples)
)) {
  stories.add(example.name, () => <Header {...example.data} />);
}
