import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { Template as BaseTemplate } from '.';

const stories = storiesOf('template', module);

const Template = function(props) {
  return (
    <BrowserRouter>
      <BaseTemplate {...props} />
    </BrowserRouter>
  );
};

stories.add('Default', () => (
  <Template>
    <p className="govuk-body">
      This component is corresponds to{' '}
      <a
        className="govuk-link"
        href="https://github.com/alphagov/govuk-frontend/blob/master/src/govuk/template.njk"
      >
        https://github.com/alphagov/govuk-frontend/blob/master/src/govuk/template.njk
      </a>
    </p>
  </Template>
));
