import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import fixtures from 'govuk-frontend/govuk/components/header/fixtures.json';
import { Header as BaseHeader } from '.';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('header', module);

const Header = function (props) {
  return (
    <BrowserRouter>
      <BaseHeader {...props} />
    </BrowserRouter>
  );
};

for (const example of Object.values(
  processExampleData(fixtures.fixtures.filter((fixture) => !fixture.hidden))
)) {
  stories.add(example.name, () => <Header {...example.options} />);
}
