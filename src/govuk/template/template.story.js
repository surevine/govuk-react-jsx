import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import headerFixtures from 'govuk-frontend/govuk/components/header/fixtures.json';
import footerFixtures from 'govuk-frontend/govuk/components/footer/fixtures.json';
import { Template as BaseTemplate } from '.';

const stories = storiesOf('template', module);

const Template = function (props) {
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

stories.add('Customised header and footer', () => (
  <Template
    beforeContent={<p className="govuk-body">Before content goes here</p>}
    containerClassName="custom-container-class-name"
    mainClassName="custom-main-class-name"
    title="Custom title here"
    header={headerFixtures.fixtures[3].data}
    footer={footerFixtures.fixtures[6].data}
  >
    <p className="govuk-body">
      Header and footer props can be passed directly through the
      &lt;Template&gt; component. See the header and footer documentation for
      details of available props.
    </p>
  </Template>
));
